package org.toasthub.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ReactController {

	@RequestMapping(value = {"/{path:[^\\.]*}"})
	public String index() {
		return "forward:/";
	}
	
	@RequestMapping(value = {"/member/**"})
	public String member() {
		return "forward:/";
	}
	
	@RequestMapping(value = {"/admin/**"})
	public String admin() {
		return "forward:/";
	}
	
}
