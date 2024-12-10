import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ComentsComponent } from '../coments/coments.component';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, ComentsComponent, NgOptimizedImage],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {

}
