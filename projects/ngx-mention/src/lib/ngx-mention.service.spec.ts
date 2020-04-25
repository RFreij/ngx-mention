import { TestBed } from '@angular/core/testing';
import { NgxMentionService } from './ngx-mention.service';

describe('NgxMentionService', () => {
    let service: NgxMentionService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(NgxMentionService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
