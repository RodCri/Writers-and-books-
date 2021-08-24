import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WritersService } from '../../../services/writers.service';
import { Writer } from '../../../model/writer.model';

@Component({
  selector: 'app-detail-writer',
  templateUrl: './detail-writer.component.html',
  styleUrls: ['./detail-writer.component.css']
})
export class DetailWriterComponent implements OnInit {

  writer: Writer;

  constructor(
    private activatedRoute: ActivatedRoute,
    private writerService: WritersService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params =>{
      console.log(params.wID);
      this.writer = await this.writerService.getByID(parseInt(params.wID));
      console.log(this.writer);
    })
  }

}
