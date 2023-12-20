import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  MonthlyNetIncome: number = 0;
  WeeklyNetIncome: number = 0;

  constructor(){

  }

  onSubmit(form: NgForm){
    this.MonthlyNetIncome = this.calculateMonthlyNetIncome(form.value.hourRate, form.value.fuelCostEachLesson, form.value.minLessonDuration,
       form.value.lessonPerDay, form.value.daysWorkedEachWeek, form.value.insurancePerMonth,
        form.value.franchiseFee, form.value.otherCostPerMonth, form.value.daysWorkedMonday,form.value.daysWorkedTuesday,
        form.value.daysWorkedWednesday,form.value.daysWorkedThursday,form.value.daysWorkedFriday,form.value.daysWorkedSaturday,form.value.daysWorkedSunday)

    this.WeeklyNetIncome = Number(((this.MonthlyNetIncome*12)/52).toFixed(2))
  }

  calculateMonthlyNetIncome(hourRate: number, fuelCostEachLesson: number, minLessonDuration: number,
     lessonPerDay: number, daysWorkedEachWeek: number,insurancePerMonth: number, 
      franchiseFee: number, otherCostPerMonth: number,daysWorkedMonday:number,daysWorkedTuesday:number,
      daysWorkedWednesday:number,daysWorkedThursday:number,daysWorkedFriday:number,daysWorkedSaturday:number,daysWorkedSunday:number): number{
  
    let x = (hourRate * minLessonDuration) - fuelCostEachLesson;
    let y = (daysWorkedMonday+daysWorkedTuesday+daysWorkedWednesday+daysWorkedThursday+daysWorkedFriday+daysWorkedSaturday+daysWorkedSunday)* x
    let t = (y * 52)/12
    let franchiseAnnual = (franchiseFee * 52)/12
    t = t - (insurancePerMonth + franchiseAnnual + otherCostPerMonth);
    return Number(t.toFixed(2));

  }
}
