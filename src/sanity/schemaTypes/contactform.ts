import { Rule } from "sanity";

export const contactForm = 
  {
      "name": "contactForm",
      "type": "document",
      "fields": [
        {
          "name": "name",
          "type": "string",
          "title": "Purn Naam",
          "validation": (rule: Rule) => rule.required().min(3).max(50)
        },
        {
          "name": "email",
          "type": "string",
          "title": "Email Address",
          "validation": (rule: Rule) => rule.required().email()
        },
       
      
       
      ]
    }