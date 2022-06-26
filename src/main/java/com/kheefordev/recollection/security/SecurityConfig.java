package com.kheefordev.recollection.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.kheefordev.recollection.service.CustomUserDetailService;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private CustomUserDetailService customUserDetailService;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private CustomAuthorizationFilter customAuthorizationFilter;

	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(customUserDetailService).passwordEncoder(passwordEncoder);
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		// override default login path in UsernamePasswordAuthenticationFilter
		CustomAuthenticationFilter customAuthenticationFilter = new CustomAuthenticationFilter(
				authenticationManagerBean());
		customAuthenticationFilter.setFilterProcessesUrl("/api/login");
		http.addFilter(customAuthenticationFilter);

		http.csrf().disable();
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		http.addFilterBefore(customAuthorizationFilter, UsernamePasswordAuthenticationFilter.class);

		http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/login").permitAll();
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/users").hasAnyAuthority("ROLE_SUPER_ADMIN",
				"ROLE_ADMIN");

		http.authorizeRequests().anyRequest().authenticated();
	}
}