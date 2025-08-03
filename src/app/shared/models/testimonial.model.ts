/**
 * Interface representing a user testimonial.
 */
export interface Testimonial {
  /**
   * The quoted feedback text.
   */
  text: string;

  /**
   * The name of the person giving the testimonial.
   */
  name: string;

  /**
   * Path to the person's profile image.
   */
  image: string;
}
