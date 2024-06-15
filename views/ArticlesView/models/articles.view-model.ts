import { Image } from 'components/ImageSlider/interfaces/image.interface';

export default class ArticlesViewModel {
  public boxArt: Image;

  constructor(
    public id: number,
    public createdDate: Date,
    public updatedDate: Date,
    public title: string,
    public slug: string,
    public description: string,
    private featuredImageUrl: string,
  ) {
    this.boxArt = {
      src: this.featuredImageUrl,
      alt: `${this.title} Box Art`,
    };
  }
}
