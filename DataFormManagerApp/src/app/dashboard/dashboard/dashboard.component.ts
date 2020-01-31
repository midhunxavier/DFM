import { Component, OnInit , ViewChild} from '@angular/core';
import { UserSpecificFormsService } from 'src/app/form-module/services/userspecificform.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormDataModel } from 'src/app/form-module/models/form-data-model';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { FormtypeService } from 'src/app/form-module/services/formtype.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DashboardComponent implements OnInit {

  tableColumns: string[] = ['FormId', 'FormType', 'FormName','StartDate','EndDate'];
  dataSource: MatTableDataSource<FormDataModel>;
  form: FormDataModel;
  expandedElement: FormDataModel | null;


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private userSpecificFormService: UserSpecificFormsService, private formTypeService: FormtypeService,
    private router: Router) { }

  ngOnInit() {

    const wctoken = window.location.href.split('wctoken=')[1];
    if (wctoken) {
          localStorage.setItem('wcToken', wctoken);
          this.router.navigate(['dashboard']);

    }


    this.userSpecificFormService.getForms('all/0/5')
      .subscribe((res) => {
        this.dataSource = new MatTableDataSource(res);   
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;  
      });
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onSelect(form: FormDataModel): void {
    this.form = form;
  }

  onDelete() {
    this.formTypeService.deleteFormData(this.form.FormId);
    window.location.reload();

  }

  getNext(pageIndex: number, pageSize : number) {
    var offset = pageIndex * pageSize;
    if (this.dataSource.paginator.length <= offset+pageSize)
    {
      this.userSpecificFormService.getForms('all/'+this.dataSource.paginator.length+"/"+5)
      .subscribe(( res : FormDataModel[]) => {
        res.forEach((item) => {
        this.dataSource.filteredData.push(item);
        } )        
        this.dataSource.sort = this.sort;
    
    });

    }
    
    
}

}