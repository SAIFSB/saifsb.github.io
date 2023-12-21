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

  constructor() {

  }

  onSubmit(form: NgForm) {
    this.MonthlyNetIncome = this.calculateMonthlyNetIncome(form.value.hourRate, form.value.fuelCostEachLesson, form.value.minLessonDuration,
      form.value.insurancePerMonth, form.value.franchiseFee, form.value.otherCostPerMonth, form.value.carRental, form.value.daysWorkedMonday, form.value.daysWorkedTuesday,
      form.value.daysWorkedWednesday, form.value.daysWorkedThursday, form.value.daysWorkedFriday, form.value.daysWorkedSaturday, form.value.daysWorkedSunday)

    this.WeeklyNetIncome = Number(((this.MonthlyNetIncome * 12) / 52).toFixed(2))
  }

  calculateMonthlyNetIncome(
    hourRate: number,
    fuelCostEachLesson: number,
    minLessonDuration: number,
    insurancePerMonth: number,
    franchiseFee: number,
    otherCostPerMonth: number,
    carRental: number,
    daysWorkedMonday: number,
    daysWorkedTuesday: number,
    daysWorkedWednesday: number,
    daysWorkedThursday: number,
    daysWorkedFriday: number,
    daysWorkedSaturday: number,
    daysWorkedSunday: number):
    number {

    console.log("carRental value:", carRental);

    let a = (hourRate * minLessonDuration) - fuelCostEachLesson;
    let b = (daysWorkedMonday + daysWorkedTuesday + daysWorkedWednesday + daysWorkedThursday + daysWorkedFriday + daysWorkedSaturday + daysWorkedSunday) * a
    let c = (b * 52) / 12
    let franchiseMonthly = (franchiseFee * 52) / 12
    let carRentalMonthly = (carRental * 52) / 12
    console.log("franchiseFeeMonthly value:", franchiseMonthly)
    console.log("carRentalMonthly value:", carRentalMonthly)
    let d = c - (insurancePerMonth + franchiseMonthly + carRentalMonthly + otherCostPerMonth);
    return Number(d.toFixed(2));

  }

  onCopy(form: NgForm) {
    let allFields = `Hour Rate: ${form.value.hourRate}\n` +
      `Fuel Cost Each Lesson: ${form.value.fuelCostEachLesson}\n` +
      `Minimum Lesson Duration: ${form.value.minLessonDuration}\n` +
      `Insurance Per Month: ${form.value.insurancePerMonth}\n` +
      `Franchise Fee: ${form.value.franchiseFee}\n` +
      `Car Rental: ${form.value.carRental}\n` +
      `Other Cost Per Month: ${form.value.otherCostPerMonth}\n` +
      `Days Worked Monday: ${form.value.daysWorkedMonday}\n` +
      `Days Worked Tuesday: ${form.value.daysWorkedTuesday}\n` +
      `Days Worked Wednesday: ${form.value.daysWorkedWednesday}\n` +
      `Days Worked Thursday: ${form.value.daysWorkedThursday}\n` +
      `Days Worked Friday: ${form.value.daysWorkedFriday}\n` +
      `Days Worked Saturday: ${form.value.daysWorkedSaturday}\n` +
      `Days Worked Sunday: ${form.value.daysWorkedSunday}\n`  +
      `Monthly Net Income: ${this.MonthlyNetIncome} \n` +
      `Weekly Net Income: ${this.WeeklyNetIncome}`;

    // Copy all fields to clipboard
    navigator.clipboard.writeText(allFields).then(() => {
      console.log('All fields copied to clipboard');
    }).catch(err => {
      console.error('Error in copying text: ', err);
    });
  }
}
