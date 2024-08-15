import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-table-pagination',
	standalone: true,
	imports: [NgClass],
	templateUrl: './table-pagination.component.html',
	styleUrl: './table-pagination.component.scss',
})
export class TablePaginationComponent implements OnInit {
	public currentPage = 1;
	public totalPages = 10;
	public pages: number[] = [];

	ngOnInit(): void {
		this.createPages(this.currentPage);
	}

	public createPages(currentPage: number): void {
		this.pages = [];
		let beforePage = currentPage === 1 ? 1 : currentPage - 4;
		const afterPage =
			currentPage === this.totalPages ? this.totalPages : currentPage + 4;

		if (currentPage === 4) {
			beforePage = currentPage - 1;
		}

		// if (currentPage === this.totalPages - 1) {
		// 	afterPage = currentPage + 1;
		// }

		for (let i = beforePage; i <= afterPage; i++) {
			this.pages.push(i);
		}

		// const test = Array.from(
		// 	{ length: afterPage - beforePage + 1 },
		// 	(_, index) => index + beforePage,
		// );
		// console.log(test);
	}

	public onGetPage(page: number) {
		this.currentPage = page;
		this.createPages(page);
	}

	public onPreviusPage() {
		this.currentPage -= 1;
		this.createPages(this.currentPage);
	}

	public onNextPage() {
		this.currentPage += 1;
		this.createPages(this.currentPage);
	}
}
