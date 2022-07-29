package com.kheefordev.recollection.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.kheefordev.recollection.model.Properties;

@Component
public class JwtUtil {
	@Autowired
	private Properties properties;

	public String getUsername(String token) {
		Algorithm algorithm = Algorithm.HMAC256(properties.getJwtSecret().getBytes());
		JWTVerifier jwtVerifier = JWT.require(algorithm).build();
		DecodedJWT decodedJWT = jwtVerifier.verify(token);
		String username = decodedJWT.getSubject();

		return username;
	}
}
