import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  articles:any;
  constructor(private ns: NewsService,private router: Router) { }

  ngOnInit() {
    this.ns.getNews('top-headlines?country=us&category=business').subscribe(data => {
      this.articles=data;
      console.log("Data:", data)
    });
  }

  onDetails(article){
    this.ns.currentarticle=article;
    this.router.navigate(['/news-single']);

  }

}
