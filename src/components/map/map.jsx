import React from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import {isEmpty} from 'ramda';

export class MapSection extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div id="map" style={{height: 100 + `%`}}></div>);
  }

  componentDidMount() {
    const {offers, city} = this.props;
    let lat = 0;
    let long = 0;
    if (!isEmpty(city)) {
      lat = city.location.latitude;
      long = city.location.longitude;
    }

    const center = [lat, long];

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
    this.mapLeaf = leaflet.map(`map`, {
      center,
      zoom,
      zoomControl: false,
      marker: true
    });
    this.mapLeaf.setView(center, zoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this.mapLeaf);
    return offers && offers.map((item) => {
      const position = item.position ? item.position : [0, 0];
      return leaflet.marker(position, {icon}).addTo(this.mapLeaf);
    });
  }

  componentDidUpdate() {
    const {offers, city} = this.props;
    let lat = 0;
    let long = 0;
    if (!isEmpty(city)) {
      lat = city.location.latitude;
      long = city.location.longitude;
    }
    const center = [lat, long];

    const zoom = 12;
    const icon = leaflet.icon({
      iconUrl: `../img/pin.svg`,
      iconSize: [30, 30]
    });

    this.mapLeaf.setView(center, zoom);
    return offers && offers.map((item) => {
      const {location} = item;
      const position = [location.latitude, location.longitude];

      return leaflet.marker(position, {icon}).addTo(this.mapLeaf);
    });
  }
}

MapSection.propTypes = {
  offers: PropTypes.array,
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    })
  })
};

