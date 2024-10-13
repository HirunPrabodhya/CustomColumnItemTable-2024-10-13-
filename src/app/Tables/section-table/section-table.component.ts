import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { ISection, ItemSummery } from '../model/myData';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-section-table',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './section-table.component.html',
  styleUrl: './section-table.component.scss'
})
export class SectionTableComponent implements OnInit{
 
  private activeRouter:ActivatedRoute = inject(ActivatedRoute);
  private service:DataService = inject(DataService);
  private router:Router = inject(Router);
  form!:FormGroup;
  private fb:FormBuilder = inject(FormBuilder);
  divisionData:ISection[] = [];
  sectionsData:{ sectionOrder: number; sectionName: string; }[] = [];
  transFormData:any[] = [];
  filteredTransformData:any[] = [];
  itemData:ItemSummery[] = [];
  ngOnInit(): void {
    this.form = this.fb.group({
      itemName:['']
    })
    this.service.getData()
    .subscribe({
      next:(data:ISection[])=>{
        this.divisionData = data.sort((a,b)=>a.sectionOrder - b.sectionOrder);
        console.log('devisinData: ',this.divisionData);
        this.getSections()
        this.transFormData = this.transformItemData();
        this.filteredTransformData = this.transFormData;
      },
      error:(err:any)=>{
          console.log(err);
      }
    });
    
    this.itemName?.valueChanges.subscribe(x=>{
          this.filteredTransformData = (x) ? this.getFilteredTransformData(x) : this.transFormData;
    })
  }

  get itemName(){
    return this.form.get('itemName');
  }
  getSections(){
    
        this.sectionsData = this.divisionData.map(x=>({
                       sectionOrder:x.sectionOrder,
                      sectionName:x.sectionName
                   })
                );
   
  }
  transformItemData(){
        const result:any[] = [];
        this.divisionData.forEach(section=>{
           section.itemSummeries.forEach(item=>{
            let existingItem = result.find(res => res.itemName === item.pieceRateItemName);
            if(!existingItem){
                existingItem = {
                      itemName: item.pieceRateItemName
                }
                result.push(existingItem)
            }
                existingItem[section.sectionName] = {
                  productionPlanQty: item.productionPlanQty,
                  qty: item.qty,
                  rateTypeDatas: item.rateTypeDatas.map(rt => ({
                    rateTypeName: rt.rateTypeName,
                    rateTypeId: rt.rateTypeId
                  }))
                };
           })
        })
        return result; 
  }
  getFilteredTransformData(filterBy:string) :any[]{
      filterBy = filterBy.toLocaleLowerCase();
      return this.transFormData.filter(x=>x.itemName.toLocaleLowerCase().includes(filterBy))
  }
}
