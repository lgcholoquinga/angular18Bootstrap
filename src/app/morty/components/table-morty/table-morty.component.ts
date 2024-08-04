import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character, Info } from '@morty/core/models';

@Component({
	selector: 'app-table-morty',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './table-morty.component.html',
	styleUrl: './table-morty.component.scss',
})
export class TableMortyComponent implements OnInit {
	@Input({ required: true }) characters!: Character[];
	@Input({ required: true }) pagination!: Info;
	@Output() emitChangePage = new EventEmitter<number>();

	public currentPage = 1;
	public currentIndex = 0;
	public pages: number[] = [];
	public currentGroup: number[] = [];

	ngOnInit(): void {
		console.log(this.pagination);
		this.onInitConfPagination();
	}

	onInitConfPagination(): void {
		this.currentPage = this.pagination.currentPage;
		//this.currentIndex = this.currentPage - 1;
		this.pages = Array.from(
			{ length: this.pagination.pages },
			(_, index) => index + 1,
		);

		const endIndex = Math.min(this.currentIndex + 5, this.pages.length);
		this.currentGroup = this.pages.slice(this.currentIndex, endIndex);
		this.currentIndex = endIndex;
	}

	onGetCharactersByPage(page: number): void {
		if (page === this.currentPage) return;
		this.currentPage = page;
		this.emitChangePage.emit(this.currentPage);
	}

	onNextPage() {
		const endIndex = Math.min(this.currentIndex + 5, this.pages.length);
		this.currentGroup = this.pages.slice(this.currentIndex, endIndex);
		this.currentIndex = endIndex;
	}
}
