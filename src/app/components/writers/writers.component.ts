import { Component, OnInit } from '@angular/core';
import { Writer } from 'src/app/model/writer.model';
import { WritersService } from '../../services/writers.service';

@Component({
  selector: 'app-writers',
  templateUrl: './writers.component.html',
  styleUrls: ['./writers.component.css']
})

export class WritersComponent implements OnInit {

  arrWriters: Writer[];
  arrPaises: string[];

  constructor(private writerService: WritersService) { 
    this.arrWriters = []; 
    this.arrPaises = [];
  }

  ngOnInit(): void {
    this.arrPaises = this.writerService.getPais();
    this.writerService.getAllWriters()
    .then(writers =>{
      this.arrWriters = writers;
    });
  }

  async selectPais($event){
    if($event.target.value === 'todos'){
      this.arrWriters = await this.writerService.getAllWriters();
    }else{
      this.arrWriters = await this.writerService.filterByPais($event.target.value);
    }
  }

}
