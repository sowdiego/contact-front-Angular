import { Component, OnInit } from '@angular/core';
import {Contact} from "../../modeles/ModelContact";
import {ContactService} from "../../Services/contacts.service";

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  contact:Contact;

  constructor( public  contactService:ContactService) { }

  ngOnInit() {
  }
  saveContact(){
    this.contactService.saveContact(this.contact)
      .subscribe(data=>{
        console.log(data)
      },err=>{
        console.log(err);
        }
      )
  }

}
