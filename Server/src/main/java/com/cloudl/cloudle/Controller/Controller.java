package com.cloudl.cloudle.Controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
public class Controller {
    @RequestMapping("/")
    public String postMethodName() {        
        return "Hello World";
    }
    
}
