import { map, kebabCase } from 'lodash'

const sliderItem = [
  {
    title:'Lorem ipsum dolor sit amet.',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    src:'images/desktop-mac-2.jpg',
    link:'/articles/lorem-ipsum'
  },
  {
    title:'Lorem ipsum.',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    src:'images/b6972e09ad5bf832a831ca2f6200e358.jpg',
    link:'/articles/lorem-ipsum'
  },
  {
    title:'Lorem ipsum jygfhjyhj.',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    src:'images/02_b.jpg',
    link:'/articles/lorem-ipsum'
  }
]

const Slider = () => (
  <div className="Slider_and_slider_menu">
    <div className="Slider_wrapper">
      <div className="Slider">
        {map(sliderItem, (item, i) => <SliderItem key={`slider-item-${i}`} item={item}/>)}
      </div>
    </div>
    <div className="Slider_menu_wrapper">
      <ul className="Slider_menu">
          {map(sliderItem, (item, i) => <SliderMenuItem key={`slider-menu-item${i}`} item={item}/>)}
      </ul>
    </div>
  </div>
)

const SliderItem = ({ item: { title, description, link } }) => (
  <div className="Slider_item" key={"home-slider-item-"+kebabCase(title)}>
      <div className="Slider_item_picture" style={`backgroundImage:"url('${item.src}')"`}/>
      <div className="Slider_text">
          <div className="Slider_item_title"><a href={link}>{title}</a></div>
          <p className="Slider_item_description">{description}</p>
      </div>
  </div>
)

const SliderMenuItem = ({ item: { title, src }, items}) => {
  const width = items.length >= 4 ? '25%' : `calc(${(100 / items.length).toString()}% - 5px)`
  const sliderPictureStyle = {backgroundImage:`"url(${src})"`, width:width}
  return(
    <li className="Slider_menu_item" key={"home-slider-menu-item"+kebabCase(title)} style={sliderPictureStyle}>
      <div className="Slider_menu_item_title">{title}</div>
    </li>
  )
}

export default Slider