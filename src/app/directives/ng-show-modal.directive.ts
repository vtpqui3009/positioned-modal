import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appNgShowModal]',
})

/**
 * This custom directive is used for handling
 * the apperance of the modal
 * when user click the item is equiped by this directive
 */
export class NgShowModalDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  modal: any;
  ngOnInit() {
    /**
     * initialize modal so that when user click item,
     * they can get the coordinates of modal correctly
     */
    this.modal = document.querySelector<HTMLElement>('.modal');
  }
  @HostListener('click')
  onClick() {
    // item and its coordinates
    const item = this.elementRef.nativeElement;
    const itemCoordinates = item.getBoundingClientRect();

    // make the modal appear
    this.renderer.setStyle(this.modal, 'display', 'block');

    // modal coordinates
    const modalCoordinates = this.modal?.getBoundingClientRect();

    if (modalCoordinates != undefined) {
      // get properly coordinates and set to the modal
      const x = Math.abs(itemCoordinates.x - modalCoordinates.width - 20);
      const y = Math.abs(itemCoordinates.y - modalCoordinates.height / 2 + 30);
      this.renderer.setStyle(this.modal, 'position', 'absolute');
      this.renderer.setStyle(this.modal, 'left', x + 'px');
      this.renderer.setStyle(this.modal, 'top', y + 'px');

      // get the container of the filter item which is 'filter' class in this case
      const parentItem = this.renderer.parentNode(item);
      const ancestorItem = this.renderer.parentNode(parentItem);

      // add event listener to the filter item container so that the modal will be set to the new coordinates when scrollin
      this.renderer.listen(ancestorItem, 'scroll', () => {
        const newItemCoordinates = item.getBoundingClientRect();
        const y = Math.abs(
          newItemCoordinates.y - modalCoordinates.height / 2 + 30
        );
        this.renderer.setStyle(this.modal, 'top', y + 'px');
      });
    }

    // handle when user click outside, this mean that when user does not click the modal or item, the modal will be disappear
    const body = document.querySelector('body');
    this.renderer.listen(body, 'click', (event) => {
      if (!event.target.contains(this.modal) && !event.target.contains(item)) {
        this.renderer.setStyle(this.modal, 'display', 'block');
      } else {
        this.renderer.setStyle(this.modal, 'display', 'none');
      }
      console.log(
        !event.target.contains(this.modal) && !event.target.contains(item)
      );
    });
  }
}
