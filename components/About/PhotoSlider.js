import React, { useState, useEffect, useRef } from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Lightbox from 'react-image-lightbox';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-slick';
import { useText } from '~/theme/common';
import { withTranslation } from '~/i18n';
import MediaCard from '../../components/Cards/MediaCard';
import useStyles from './about-style';

function PhotoSlider(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = props;

  // Image Lightbox
  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const imgData = [
    'https://source.unsplash.com/random',
    'https://source.unsplash.com/random',
    'https://source.unsplash.com/random',
    'https://source.unsplash.com/random',
    'https://source.unsplash.com/random',
    'https://source.unsplash.com/random'
  ]

  // Slider Carousel
  const slider = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 3,
    infinite: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  const slickNext = slide => {
    slider.current.next();
  };

  const slickPrev = slide => {
    slider.current.prev();
  };

  function showPopup(index) {
    setOpen(true);
    setPhotoIndex(index);
  }

  function onMovePrevRequest() {
    setPhotoIndex((photoIndex + imgData.length - 1) % imgData.length);
  }

  function onMoveNextRequest() {
    setPhotoIndex((photoIndex + imgData.length + 1) % imgData.length);
  }

  return (
    <div>
      {open && (
        <Lightbox
          mainSrc={imgData[photoIndex]}
          nextSrc={imgData[(photoIndex + 1) % imgData.length]}
          prevSrc={imgData[(photoIndex + 1) % imgData.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={onMovePrevRequest}
          onMoveNextRequest={onMoveNextRequest}
        />
      )}
      <Container>
        <Box mb={3}>
          <Typography variant="h4" className={text.title2}>
            {t('common:about_gallery')}
          </Typography>
        </Box>
        <Typography display="block">
          Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        {loaded && (
          <div className={classes.carousel}>
            <IconButton
              onClick={() => handlePrev()}
              className={clsx(classes.nav, classes.prev)}
            >
              <ArrowBackIcon />
            </IconButton>
            <Carousel {...settings}>
              {imgData.map((item, index) => (
                <div
                  key={index.toString()}
                  className={classes.item}
                  onClick={() => showPopup(index)}
                >
                  <Box px={3}>
                    <MediaCard
                      title="Sed lacinia velit, ut malesuada eros interdum a"
                      orientation="portrait"
                      type="photo"
                      thumb={item}
                      href="#!"
                    />
                  </Box>
                </div>
              ))}
            </Carousel>
            <IconButton
              onClick={() => () => handlNext()}
              className={clsx(classes.nav, classes.next)}
            >
              <ArrowForwardIcon />
            </IconButton>
          </div>
        )}
      </Container>
    </div>
  );
}

PhotoSlider.propTypes = {
  t: PropTypes.func.isRequired,
};

PhotoSlider.getInitialProps = async () => ({
  namespacesRequired: ['common', 'starter-landing'],
});

export default withTranslation(['common', 'starter-landing'])(PhotoSlider);
