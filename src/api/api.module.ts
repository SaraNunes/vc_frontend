import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AuthenticationService } from './api/authentication.service';
import { CommentsService } from './api/comments.service';
import { CoursesService } from './api/courses.service';
import { EnrollmentsService } from './api/enrollments.service';
import { NotificationService } from './api/notification.service';
import { ScheduleService } from './api/schedule.service';
import { SearchService } from './api/search.service';
import { UsersService } from './api/users.service';
import { VideosService } from './api/videos.service';
import { VideostreamService } from './api/videostream.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AuthenticationService,
    CommentsService,
    CoursesService,
    EnrollmentsService,
    NotificationService,
    ScheduleService,
    SearchService,
    UsersService,
    VideosService,
    VideostreamService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
