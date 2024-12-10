import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OperatingSystem } from '../../interfaces/operating-system';

@Component({
  selector: 'user-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() occupation: string = "";
  @Output() greet: EventEmitter<string> = new EventEmitter<string>();

  username: string = "Pedro";
  doesUserExist: boolean = false;
  operatingSystems: OperatingSystem[] = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOS'}, {id: 'linux', name: 'Linux'}];
  isEditable: boolean = true;

  onMouseOver(osName: string): void {
    console.log(osName);
  }

  emitToParent(): void {
    this.greet.emit("Hi Papa I'm your child");
  }

}
