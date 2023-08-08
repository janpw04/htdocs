package serverapplication.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class UIController {
    @GetMapping
    public String showUI(Model model){
        model.addAttribute("username", "");
        model.addAttribute("password", "");
        return "index";
    }



    @PostMapping("/login_form")
    public String processInput(String username, String password){
        return "";
    }
}
