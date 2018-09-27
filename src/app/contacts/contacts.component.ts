import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {HttpClient} from "@angular/common/http";
import 'rxjs';
import 'rxjs/add/operator/map';

import { map } from 'rxjs/operators';
import {ContactService} from "../../Services/contacts.service";



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contact = {nom: "Mamadou" , email: "sowdiego@gmail.com" };
    pageContact:any;
    motCle:string="";
    page:number=0;
    size:number=5;
    pages:Array<number>;
  constructor(private http:Http, public contactservice:ContactService) { }

  ngOnInit() {

  }

  doSearch(){

      this.contactservice.getContacts(this.motCle,this.page,this.size)
      .subscribe(data=>{
        this.pageContact=data;
        this.pages=new Array(data.totalPages);

      },  err=>{
        console.log(err);
      })

  }
  Chercher(){
    this.doSearch();

  }
  gotoPage(i:number){
    this.page=i;
    this.doSearch();
  }

}
