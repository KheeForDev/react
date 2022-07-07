package com.kheefordev.recollection.security;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;

public class CustomAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
	private static final Logger log = LogManager.getLogger(CustomAuthenticationFilter.class);

	private AuthenticationManager authenticationManager;

	public CustomAuthenticationFilter(AuthenticationManager authenticationManager) {
		this.authenticationManager = authenticationManager;
	}

	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException {
		String username = "";
		String password = "";

		// for request using application/json
		try {
			Map<?, ?> requestMap = new ObjectMapper().readValue(request.getInputStream(), Map.class);
			username = (String) requestMap.get("username");
			password = (String) requestMap.get("password");
		} catch (IOException e) {
			log.error(e.getMessage());
		}

		log.info("username: {}", username);
		log.info("password: {}", password);

		UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username,
				password, new ArrayList<SimpleGrantedAuthority>());

		return authenticationManager.authenticate(authenticationToken);
	}

	@Override
	protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
			Authentication authentication) throws IOException, ServletException {
		User user = (User) authentication.getPrincipal();
		Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
		String accessToken = JWT.create().withSubject(user.getUsername())
				.withExpiresAt(new Date(System.currentTimeMillis() + 10 * 60 * 1000))
				.withIssuer(request.getRequestURI())
				.withClaim("roles",
						user.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
				.sign(algorithm);

		List<String> roles = new ArrayList<String>();
		for (GrantedAuthority grantedAuthority : user.getAuthorities()) {
			roles.add(grantedAuthority.getAuthority());
		}
		
		Map<Object, Object> responseHM = new HashMap<Object, Object>();
		responseHM.put("username", user.getUsername());
		responseHM.put("accessToken", accessToken);
		responseHM.put("roles", roles);

		response.setContentType("application/json");
		new ObjectMapper().writeValue(response.getOutputStream(), responseHM);
	}
}
