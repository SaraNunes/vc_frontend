import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course, CoursesService, User, Video, Session } from 'src/api';
import { Observable, of } from 'rxjs';
import { switchMap, tap, map, filter, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-courses-overview',
  templateUrl: './courses-overview.component.html',
  styleUrls: ['./courses-overview.component.css']
})
export class CoursesOverviewComponent implements OnInit {
  course$: Observable<Course>;

  constructor(private courseApi: CoursesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.course$ = this.route.queryParams.pipe(
      map(v => +v.courseId),
      switchMap(id => this.courseInHistory(id) ? of(history.state) : this.courseApi.apiCoursesIdGet(id, true, true, true)),
      shareReplay());
  }

  getVideos(sessions: Session[]): Video[] {
    return [].concat.apply([], sessions.map(s => s.recordings).filter(e => e != null));
  }

  getParticipants(sessions: Session[]): User[] {
    const flatUsers = [].concat.apply([], sessions.map(s => s.participants));
    const filtered = flatUsers.filter((elem, i, arr) => arr.findIndex(elem2 => elem2.id === elem.id) === i);
    return filtered.map(p => p.fullName + '(' + p.id + ')');
  }

  courseInHistory(id: number) {
    return history.state && (history.state as Course).id === id;
  }
}