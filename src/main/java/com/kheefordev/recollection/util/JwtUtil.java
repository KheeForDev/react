package com.kheefordev.recollection.util;

import org.springframework.stereotype.Component;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;

@Component
public class JwtUtil {
	public String getUsername(String token) {
		Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
		JWTVerifier jwtVerifier = JWT.require(algorithm).build();
		DecodedJWT decodedJWT = jwtVerifier.verify(token);
		String username = decodedJWT.getSubject();
		
		return username;
	}
}
