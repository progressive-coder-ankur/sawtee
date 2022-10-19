import { styled } from "frontity";

const shortcodesUltimateStyles = styled.root`
  .wp-block-uagb-advanced-heading {
    padding: 0;
    margin: 0 auto;
  }
  .wp-block-uagb-advanced-heading .uagb-heading-text {
    margin: 0;
    text-align: center;
  }
  .wp-block-uagb-advanced-heading .uagb-separator-wrap {
    font-size: 0;
    text-align: center;
  }
  .wp-block-uagb-advanced-heading .uagb-separator {
    border-top-style: solid;
    display: inline-block;
    border-top-width: 2px;
    width: 5%;
    margin: 0px 0px 10px 0px;
  }
  .wp-block-uagb-advanced-heading .uagb-desc-text {
    margin: 0;
    text-align: center;
  }
  .uagb-post-grid {
    margin: 0;
    position: relative;
  }
  .uagb-post-grid .is-grid article {
    float: left;
    display: inline-block;
  }
  .uagb-post-grid .uagb-post__items {
    -js-display: flex;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .uagb-post-grid .is-grid.uagb-post__equal-height .uagb-post__inner-wrap {
    height: 100%;
  }
  .uagb-post-grid .is-masonry .uagb-post__inner-wrap {
    height: 100%;
  }
  .uagb-post-grid .uagb-post__inner-wrap > p {
    display: none;
  }
  .uagb-post-grid .uagb-post__author span,
  .uagb-post-grid .uagb-post__comment span,
  .uagb-post-grid .uagb-post__date span {
    font-size: inherit;
    line-height: inherit;
    width: inherit;
    height: inherit;
    margin-right: 4px;
  }
  .uagb-post-grid .uagb-post__columns-8 article {
    width: 12.5%;
  }
  .uagb-post-grid .uagb-post__columns-7 article {
    width: 14.28%;
  }
  .uagb-post-grid .uagb-post__columns-6 article {
    width: 16.66%;
  }
  .uagb-post-grid .uagb-post__columns-5 article {
    width: 20%;
  }
  .uagb-post-grid .uagb-post__columns-4 article {
    width: 25%;
  }
  .uagb-post-grid .uagb-post__columns-3 article {
    width: 33.2%;
  }
  .uagb-post-grid .uagb-post__columns-2 article {
    width: 50%;
  }
  .uagb-post-grid .uagb-post__columns-1 article {
    width: 100%;
  }
  @media only screen and (max-width: 600px) {
    .uagb-post-grid div[class*="columns"].is-grid {
      grid-template-columns: 1fr;
    }
  }
  .uagb-post-grid .uagb-post__image img {
    display: block;
    width: 100%;
  }
  .uagb-post-grid .uagb-post__text {
    text-align: left;
  }
  .uagb-post-grid .uagb-post__title {
    margin-top: 0;
    margin-bottom: 15px;
    word-break: break-word;
  }
  .uagb-post-grid .uagb-post__title a {
    color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-transition: 0.3s ease;
    -o-transition: 0.3s ease;
    transition: 0.3s ease;
    text-decoration: none;
  }
  .uagb-post-grid .uagb-post__title a:hover {
    text-decoration: none;
  }
  .uagb-post-grid .uagb-post__title a:focus {
    text-decoration: none;
  }
  .uagb-post-grid .uagb-post__title a:active {
    text-decoration: none;
  }
  .uagb-post-grid .uagb-post-grid-byline {
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 1px;
    margin-bottom: 15px;
  }
  .uagb-post-grid .uagb-post__text .uagb-post-grid-byline > * {
    margin-right: 10px;
  }
  .uagb-post-grid .uagb-post-grid-byline a,
  .uagb-post-grid .uagb-post-grid-byline a:focus,
  .uagb-post-grid .uagb-post-grid-byline a:active {
    color: inherit;
    font-size: inherit;
  }
  .uagb-post-grid .uagb-post__title a,
  .uagb-post-grid .uagb-post__title a:focus,
  .uagb-post-grid .uagb-post__title a:active {
    color: inherit;
    font-size: inherit;
  }
  .uagb-post-grid .uagb-post__author,
  .uagb-post-grid .uagb-post__date {
    display: inline-block;
    word-break: break-all;
  }
  .uagb-post-grid .uagb-post__author:not(:last-child):after,
  .uagb-post-grid .uagb-post__date:not(:last-child):after {
    content: "\B7";
    vertical-align: middle;
    margin: 0 5px;
    line-height: 1;
  }
  .uagb-post-grid .uagb-post__comment {
    display: inline-block;
  }
  .uagb-post-grid .uagb-post__author a {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .uagb-post-grid .uagb-post__author a:hover {
    color: inherit;
    -webkit-box-shadow: 0 -1px 0 inset;
    box-shadow: 0 -1px 0 inset;
  }
  .uagb-post-grid .uagb-post__excerpt {
    margin-bottom: 25px;
    word-break: break-word;
  }
  .uagb-post-grid .uagb-post__text p {
    margin: 0 0 15px 0;
  }
  .uagb-post-grid .uagb-post__text p:last-of-type {
    margin-bottom: 0;
  }
  .uagb-post-grid .uagb-post__cta {
    border: none;
    display: inline-block;
  }
  .uagb-post-grid .uagb-post__link {
    display: inline-block;
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-transition: 0.3s ease;
    -o-transition: 0.3s ease;
    transition: 0.3s ease;
    font-weight: bold;
    color: inherit;
    text-decoration: none;
    padding: 5px 10px;
  }
  .uagb-post-grid .uagb-post__excerpt div + p {
    margin-top: 15px;
  }
  .uagb-post-grid .uagb-post__excerpt p {
    color: inherit;
  }
  .uagb-post-grid .uagb-post__link-complete-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 11;
  }
  .uagb-post__image-position-background .uagb-post__text {
    opacity: 1;
    position: relative;
    z-index: 10;
    overflow: hidden;
    width: 100%;
  }
  .uagb-post__image-position-background .uagb-post__inner-wrap {
    position: relative;
    width: 100%;
  }
  .uagb-post__image-position-background .uagb-post__image img {
    position: absolute;
    width: auto;
    height: auto;
    min-width: 100%;
    max-width: none;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    min-height: 100%;
  }
  .uagb-post__image-position-background .uagb-post__image {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    overflow: hidden;
    text-align: center;
    position: relative;
  }
  .uagb-post__image-position-background .uagb-post__image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
  .uagb-post__image-position-background .uagb-post__image::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .uagb-post-grid[data-equal-height="yes"] .uagb-post__inner-wrap {
    display: inline-block;
    height: 100%;
  }
  .uagb-post__arrow-outside.uagb-post-grid .slick-prev {
    left: -45px;
    z-index: 1;
  }
  [dir="rtl"] .uagb-post__arrow-outside.uagb-post-grid .slick-prev {
    left: auto;
    right: -45px;
  }
  .uagb-post__arrow-outside.uagb-post-grid .slick-next {
    right: -45px;
  }
  [dir="rtl"] .uagb-post__arrow-outside.uagb-post-grid .slick-next {
    left: -45px;
    right: auto;
  }
  .uagb-post__arrow-inside.uagb-post-grid .slick-prev {
    left: 25px;
    z-index: 1;
  }
  [dir="rtl"] .uagb-post__arrow-inside.uagb-post-grid .slick-prev {
    left: auto;
    right: 25px;
  }
  .uagb-post__arrow-inside.uagb-post-grid .slick-next {
    right: 25px;
  }
  [dir="rtl"] .uagb-post__arrow-inside.uagb-post-grid .slick-next {
    left: 25px;
    right: auto;
  }
  .uagb-post-grid .is-grid article,
  .uagb-post-grid .is-masonry article,
  .uagb-post-grid .is-carousel article {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  @media (max-width: 976px) {
    .uagb-post__arrow-outside.uagb-post-grid .slick-prev {
      left: 15px;
      z-index: 1;
    }
    [dir="rtl"] .uagb-post__arrow-outside.uagb-post-grid .slick-prev {
      left: auto;
      right: 15px;
    }
    .uagb-post__arrow-outside.uagb-post-grid .slick-next {
      right: 15px;
    }
    [dir="rtl"] .uagb-post__arrow-outside.uagb-post-grid .slick-next {
      left: 15px;
      right: auto;
    }
    .uagb-post-grid .uagb-post__columns-tablet-1 article {
      width: 100%;
    }
    .uagb-post-grid .uagb-post__columns-tablet-2 article {
      width: 50%;
    }
    .uagb-post-grid .uagb-post__columns-tablet-3 article {
      width: 33.2%;
    }
    .uagb-post-grid .uagb-post__columns-tablet-4 article {
      width: 25%;
    }
    .uagb-post-grid .uagb-post__columns-tablet-5 article {
      width: 20%;
    }
    .uagb-post-grid .uagb-post__columns-tablet-6 article {
      width: 16.66%;
    }
    .uagb-post-grid .uagb-post__columns-tablet-7 article {
      width: 14.28%;
    }
    .uagb-post-grid .uagb-post__columns-tablet-8 article {
      width: 12.5%;
    }
  }
  @media (max-width: 767px) {
    .uagb-post-grid .uagb-post__columns-mobile-1 article {
      width: 100%;
    }
    .uagb-post-grid .uagb-post__columns-mobile-2 article {
      width: 50%;
    }
    .uagb-post-grid .uagb-post__columns-mobile-3 article {
      width: 33.2%;
    }
    .uagb-post-grid .uagb-post__columns-mobile-4 article {
      width: 25%;
    }
    .uagb-post-grid .uagb-post__columns-mobile-5 article {
      width: 20%;
    }
    .uagb-post-grid .uagb-post__columns-mobile-6 article {
      width: 16.66%;
    }
    .uagb-post-grid .uagb-post__columns-tablet-7 article {
      width: 14.28%;
    }
    .uagb-post-grid .uagb-post__columns-tablet-8 article {
      width: 12.5%;
    }
  }
  .uagb-section__wrap {
    position: relative;
  }
  .uagb-section__wrap .uagb-section__inner-wrap {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 2;
  }
  .uagb-section__wrap .uagb-section__overlay {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
  }
  .uagb-section__wrap .uagb-section__video-wrap {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    overflow: hidden;
    z-index: 0;
    -webkit-transition: opacity 1s;
    -o-transition: opacity 1s;
    transition: opacity 1s;
  }
  .uagb-section__wrap .uagb-section__video-wrap video {
    max-width: 100%;
    width: 100%;
    height: 100%;
    margin: 0;
    line-height: 1;
    border: none;
    display: inline-block;
    vertical-align: baseline;
    -o-object-fit: cover;
    object-fit: cover;
    background-size: cover;
  }
  @media only screen and (max-width: 449px) {
    .uagb-section__wrap.uagb-section__background-image {
      background-attachment: scroll !important;
    }
  }
  .uagb-buttons__outer-wrap .uagb-buttons__wrap {
    -js-display: flex;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .uagb-buttons__outer-wrap .uagb-button__active,
  .uagb-buttons__outer-wrap .uagb-button__active:focus {
    -webkit-box-shadow: 0 0 0 1px #5b9dd9, 0 0 2px 1px rgba(30, 140, 190, 0.8);
    box-shadow: 0 0 0 1px #5b9dd9, 0 0 2px 1px rgba(30, 140, 190, 0.8);
  }
  .uagb-buttons__outer-wrap a.uagb-button__link:focus,
  .uagb-buttons__outer-wrap .uagb-button__link:focus {
    -webkit-box-shadow: none;
    box-shadow: none;
    text-decoration: none;
  }
  .uagb-buttons__outer-wrap .uagb-button__wrapper {
    padding: 0;
    border: 1px solid #333;
    border-radius: 2px;
    margin-left: 5px;
    margin-right: 5px;
    -webkit-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;
    display: -ms-inline-flexbox;
    display: inline-flex;
  }
  .uagb-buttons__outer-wrap .uagb-button__wrapper:first-child {
    margin-left: 0;
  }
  .uagb-buttons__outer-wrap .uagb-button__wrapper:last-child {
    margin-right: 0;
  }
  .uagb-buttons__outer-wrap .uagb-button__wrapper a.uagb-button__link,
  .uagb-buttons__outer-wrap .uagb-button__wrapper .uagb-button__link {
    padding: 10px 14px;
    width: 100%;
    color: #333;
    text-decoration: none;
    font-family: inherit;
    line-height: inherit;
    font-weight: inherit;
  }
  .uagb-buttons__outer-wrap .uagb-button__wrapper a.uagb-button__link,
  .uagb-buttons__outer-wrap .uagb-button__wrapper:hover a.uagb-button__link,
  .uagb-buttons__outer-wrap .uagb-button__wrapper .uagb-button__link,
  .uagb-buttons__outer-wrap .uagb-button__wrapper:hover .uagb-button__link {
    text-decoration: none;
  }
  .uagb-ifb-icon-wrap,
  .uagb-ifb-icon-wrap * {
    -webkit-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;
  }
  .uagb-ifb-icon-wrap .uagb-ifb-icon,
  .uagb-ifb-content {
    display: inline-block;
  }
  .uagb-ifb-icon svg {
    width: inherit;
    height: inherit;
    vertical-align: middle;
  }
  .infobox-icon-above-title .uagb-ifb-left-right-wrap {
    text-align: center;
  }
  a.uagb-infobox-cta-link span {
    font-size: inherit;
  }
  .uagb-ifb-cta.uagb-infobox-cta-link-style:empty {
    display: none;
  }
  a.uagb-infobox-cta-link,
  .entry .entry-content a.uagb-infobox-cta-link,
  a.uagb-infobox-link-wrap,
  .entry .entry-content a.uagb-infobox-link-wrap {
    text-decoration: none;
  }
  a.uagb-infobox-cta-link:hover,
  .entry .entry-content a.uagb-infobox-cta-link:hover,
  a.uagb-infobox-link-wrap:hover,
  .entry
    .entry-content
    a.uagb-infobox-link-wrap:hover
    .entry
    .entry-content
    a.uagb-infobox-cta-link:hover {
    color: inherit;
  }
  .uagb-infobox-icon-left-title.uagb-infobox-image-valign-middle
    .uagb-ifb-title-wrap,
  .uagb-infobox-icon-right-title.uagb-infobox-image-valign-middle
    .uagb-ifb-title-wrap,
  .uagb-infobox-image-valign-middle .uagb-ifb-imgicon-wrap,
  .uagb-infobox-icon-left.uagb-infobox-image-valign-middle .uagb-ifb-content,
  .uagb-infobox-icon-right.uagb-infobox-image-valign-middle .uagb-ifb-content {
    -ms-flex-item-align: center;
    align-self: center;
  }
  .uagb-infobox-left {
    text-align: left;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
  .uagb-infobox-center {
    text-align: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .uagb-infobox-right {
    text-align: right;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
  .uagb-ifb-left-right-wrap {
    width: 100%;
    word-break: break-word;
  }
  .uagb-infobox-icon-above-title .uagb-ifb-left-right-wrap,
  .uagb-infobox-icon-below-title .uagb-ifb-left-right-wrap {
    display: block;
    min-width: 100%;
    width: 100%;
  }
  .uagb-infobox-icon-left-title .uagb-ifb-icon-wrap,
  .uagb-infobox-icon-left .uagb-ifb-icon-wrap {
    margin-right: 10px;
  }
  .uagb-infobox-icon-right-title .uagb-ifb-icon-wrap,
  .uagb-infobox-icon-right .uagb-ifb-icon-wrap {
    margin-left: 10px;
  }
  .uagb-infobox-icon-left .uagb-ifb-left-right-wrap,
  .uagb-infobox-icon-right .uagb-ifb-left-right-wrap,
  .uagb-infobox-icon-left-title .uagb-ifb-left-title-image,
  .uagb-infobox-icon-right-title .uagb-ifb-right-title-image {
    display: -ms-flexbox;
    -js-display: flex;
    display: flex;
  }
  .uagb-infobox-icon-right .uagb-ifb-left-right-wrap,
  .uagb-infobox-icon-right-title .uagb-ifb-right-title-image {
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
  .uagb-ifb-icon-wrap .uagb-ifb-icon span {
    font-style: initial;
    height: auto;
    width: auto;
  }
  .uagb-ifb-imgicon-wrap .uagb-ifb-image-content {
    display: inline-block;
    line-height: 0;
    position: relative;
    max-width: 100%;
  }
  .uagb-ifb-imgicon-wrap .uagb-ifb-image-content img {
    display: inline;
    height: auto !important;
    max-width: 100%;
    width: auto;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    border-radius: inherit;
  }
  .uagb-ifb-imgicon-wrap .uagb-image-crop-circle img {
    border-radius: 100%;
  }
  .uagb-ifb-imgicon-wrap .uagb-image-crop-square img {
    border-radius: 0;
  }
  .uagb-infobox-module-link {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 4;
  }
  .uagb-edit-mode .uagb-infobox-module-link {
    z-index: 2;
  }
  .uagb-infobox-link-icon-after {
    margin-left: 5px;
    margin-right: 0;
  }
  .uagb-infobox-link-icon-before {
    margin-left: 0;
    margin-right: 5px;
  }
  .uagb-infobox-link-icon {
    -webkit-transition: all 200ms linear;
    -o-transition: all 200ms linear;
    transition: all 200ms linear;
  }
  .uagb-infobox {
    position: relative;
  }
  .uagb-ifb-separator {
    width: 30%;
    border-top-width: 2px;
    border-top-color: #333;
    border-top-style: solid;
    display: inline-block;
    margin: 0;
  }
  .uagb-ifb-separator-parent {
    line-height: 0em;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 10px;
  }
  .uagb-ifb-cta-button {
    display: inline-block;
    line-height: 1;
    background-color: #818a91;
    color: #fff;
    text-align: center;
  }
  .uagb-ifb-cta a {
    -webkit-box-shadow: none;
    box-shadow: none;
    text-decoration: none;
  }
  .uagb-ifb-title-wrap .uagb-ifb-title,
  .uagb-ifb-title-wrap .uagb-ifb-title-prefix {
    padding: 0;
    margin: 0;
    display: block;
  }
  .uagb-infobox__content-wrap.uagb-infobox {
    position: relative;
  }
  .uagb-ifb-icon span {
    font-size: 40px;
    height: 40px;
    color: #333;
    width: 40px;
  }
  .uagb-ifb-icon svg {
    fill: #333;
  }
  .uagb-ifb-content {
    width: 100%;
  }
  .uagb-infobox__content-wrap.uagb-infobox,
  .uagb-ifb-content,
  .uagb-ifb-title-wrap,
  .uagb-ifb-title-prefix *,
  svg.dashicon.dashicons-upload {
    z-index: 1;
  }
  .uagb-ifb-left-right-wrap,
  button.components-button {
    z-index: 1;
  }
  .uagb-infobox-cta-link {
    cursor: pointer;
  }
  a.uagb-infobox-link-wrap {
    color: inherit;
  }
  .uagb-ifb-content p:empty {
    display: none;
  }
  .uagb-infobox .uagb-ifb-icon,
  .uagb-infobox .uagb-ifb-image-content img {
    display: inline-block;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
  }
  .uagb-ifb-align-icon-after {
    margin-left: 5px;
  }
  .uagb-ifb-align-icon-before {
    margin-right: 5px;
  }
  span.uagb-ifb-button-icon.uagb-ifb-align-icon-after {
    float: right;
  }
  .uagb-ifb-button-icon {
    height: 15px;
    width: 15px;
    font-size: 15px;
    vertical-align: middle;
  }
  .uagb-ifb-text-icon {
    height: 15px;
    width: 15px;
    font-size: 15px;
    line-height: 15px;
    vertical-align: middle;
    display: inline-block;
  }
  .uagb-ifb-button-icon svg,
  .uagb-ifb-text-icon svg {
    height: inherit;
    width: inherit;
    display: inline-block;
  }
  .block-editor-page #wpwrap .uagb-infobox-cta-link svg,
  .uagb-infobox-cta-link svg {
    font-style: normal;
  }
  @media only screen and (max-width: 976px) {
    .uagb-infobox-stacked-tablet
      .uagb-ifb-left-right-wrap
      .uagb-ifb-imgicon-wrap {
      padding: 0;
      margin-bottom: 20px;
    }
    .uagb-infobox-stacked-tablet.uagb-reverse-order-tablet
      .uagb-ifb-left-right-wrap {
      display: -ms-inline-flexbox;
      -js-display: inline-flex;
      display: inline-flex;
      -ms-flex-direction: column-reverse;
      flex-direction: column-reverse;
    }
    .uagb-infobox.uagb-infobox-stacked-tablet
      .uagb-ifb-left-right-wrap
      .uagb-ifb-content,
    .uagb-infobox.uagb-infobox-stacked-tablet
      .uagb-ifb-left-right-wrap
      .uagb-ifb-imgicon-wrap {
      display: block;
      width: 100%;
      text-align: center;
    }
    .uagb-infobox.uagb-infobox-stacked-tablet
      .uagb-ifb-left-right-wrap
      .uagb-ifb-imgicon-wrap {
      margin-left: 0px;
      margin-right: 0px;
    }
    .uagb-infobox-stacked-tablet .uagb-ifb-left-right-wrap {
      display: inline-block;
    }
    .uagb-infobox-icon-left-title.uagb-infobox-stacked-tablet
      .uagb-ifb-imgicon-wrap,
    .uagb-infobox-icon-left.uagb-infobox-stacked-tablet .uagb-ifb-imgicon-wrap {
      margin-right: 0px;
    }
    .uagb-infobox-icon-right-title.uagb-infobox-stacked-tablet
      .uagb-ifb-imgicon-wrap,
    .uagb-infobox-icon-right.uagb-infobox-stacked-tablet
      .uagb-ifb-imgicon-wrap {
      margin-left: 0px;
    }
    .uagb-infobox-icon-left-title .uagb-ifb-separator-parent {
      margin: 10px 0;
    }
  }
  @media screen and (max-width: 767px) {
    .uagb-infobox-stacked-mobile
      .uagb-ifb-left-right-wrap
      .uagb-ifb-imgicon-wrap {
      padding: 0;
      margin-bottom: 20px;
    }
    .uagb-infobox-stacked-mobile.uagb-reverse-order-mobile
      .uagb-ifb-left-right-wrap {
      display: -ms-inline-flexbox;
      -js-display: inline-flex;
      display: inline-flex;
      -ms-flex-direction: column-reverse;
      flex-direction: column-reverse;
    }
    .uagb-infobox.uagb-infobox-stacked-mobile
      .uagb-ifb-left-right-wrap
      .uagb-ifb-content,
    .uagb-infobox.uagb-infobox-stacked-mobile
      .uagb-ifb-left-right-wrap
      .uagb-ifb-imgicon-wrap {
      display: block;
      width: 100%;
      text-align: center;
    }
    .uagb-infobox.uagb-infobox-stacked-mobile
      .uagb-ifb-left-right-wrap
      .uagb-ifb-imgicon-wrap {
      margin-left: 0px;
      margin-right: 0px;
    }
    .uagb-infobox-stacked-mobile .uagb-ifb-left-right-wrap {
      display: inline-block;
    }
    .uagb-infobox-icon-left-title.uagb-infobox-stacked-mobile
      .uagb-ifb-imgicon-wrap,
    .uagb-infobox-icon-left.uagb-infobox-stacked-mobile .uagb-ifb-imgicon-wrap {
      margin-right: 0px;
    }
    .uagb-infobox-icon-right-title.uagb-infobox-stacked-mobile
      .uagb-ifb-imgicon-wrap,
    .uagb-infobox-icon-right.uagb-infobox-stacked-mobile
      .uagb-ifb-imgicon-wrap {
      margin-left: 0px;
    }
    .uagb-infobox-icon-left-title .uagb-ifb-separator-parent {
      margin: 10px 0;
    }
  }
  .uagb-testimonial__wrap {
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .uagb-testimonial__wrap,
  .uagb-testimonial__wrap * {
    -webkit-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;
  }
  .uagb-icon-wrap .uagb-icon {
    display: inline-block;
  }
  .uagb-tm__image {
    position: relative;
  }
  .uagb-tm__imgicon-style-circle .uagb-tm__image img {
    border-radius: 100%;
    -webkit-border-radius: 100%;
  }
  .uagb-tm__imgicon-style-square .uagb-tm__image img {
    border-radius: 0%;
    -webkit-border-radius: 0%;
  }
  .uagb-tm__image img,
  .slick-slide .uagb-tm__image img {
    display: inline-block;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
  }
  .uagb-tm__author-name,
  .uagb-tm__company {
    display: inline-block;
  }
  .uagb-tm__content {
    overflow: hidden;
    text-align: center;
    word-break: break-word;
    padding: 15px;
    border-radius: inherit;
    position: relative;
  }
  .uagb-tm__image-position-left .uagb-tm__content,
  .uagb-tm__image-position-right .uagb-tm__content {
    display: -ms-flexbox;
    -js-display: flex;
    display: flex;
  }
  .uagb-tm__meta-inner {
    display: inline-block;
  }
  .uagb-tm__image-position-bottom .uagb-tm__image-content,
  .uagb-tm__image-position-bottom .uagb-testimonial-details {
    display: table-cell;
    vertical-align: middle;
  }
  .uagb-tm__meta {
    width: 100%;
    line-height: 1;
  }
  .uagb-tm__image-position-bottom .uagb-tm__image-content {
    padding-right: 10px;
  }
  .uagb-tm__author-name,
  .uagb-tm__company {
    display: block;
  }
  .uagb-tm__image-aligned-middle .uagb-tm__image-content {
    -ms-flex-item-align: center;
    align-self: center;
  }
  .uagb-tm__desc {
    margin-bottom: 15px;
  }
  .uagb-tm__author-name {
    margin-bottom: 5px;
    font-size: 30px;
    line-height: 1em;
  }
  .uagb-tm__company {
    font-size: 15px;
    font-style: italic;
    line-height: 1em;
    color: #888888;
  }
  .is-carousel .uagb-testomonial__outer-wrap {
    padding-left: 10px;
    padding-right: 10px;
  }
  .uagb-tm__overlay {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background: transparent;
  }
  .uagb-tm__text-wrap {
    position: relative;
  }
  .uagb-tm__items {
    visibility: hidden;
  }
  .uagb-tm__items.slick-initialized {
    visibility: visible;
  }
  .uagb-tm__image-position-top .uagb-tm__image-content {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
  }
  @media (max-width: 976px) {
    .uagb-tm__image-position-bottom.uagb-tm-stacked-tablet
      .uagb-tm__image-content,
    .uagb-tm__image-position-bottom.uagb-tm-stacked-tablet
      .uagb-testimonial-details {
      display: block;
      vertical-align: middle;
    }
    .uagb-tm__image-position-left.uagb-tm-stacked-tablet .uagb-tm__content,
    .uagb-tm__image-position-right.uagb-tm-stacked-tablet .uagb-tm__content {
      display: block;
      -js-display: block;
      display: block;
    }
    .uagb-tm__image-position-right.uagb-tm-stacked-tablet.uagb-tm-reverse-order-tablet
      .uagb-tm__content {
      display: -ms-inline-flexbox;
      -js-display: inline-flex;
      display: inline-flex;
      -ms-flex-direction: column-reverse;
      flex-direction: column-reverse;
    }
    .uagb-tm__image-aligned-top.uagb-tm-stacked-tablet .uagb-tm__image-content {
      display: -ms-inline-flexbox;
      -js-display: inline-flex;
      display: inline-flex;
      -ms-flex-item-align: center;
      align-self: center;
    }
  }
  @media (max-width: 768px) {
    .uagb-tm__image-position-bottom.uagb-tm-stacked-mobile
      .uagb-tm__image-content,
    .uagb-tm__image-position-bottom.uagb-tm-stacked-mobile
      .uagb-testimonial-details {
      display: block;
      vertical-align: middle;
    }
    .uagb-tm__image-position-left.uagb-tm-stacked-mobile .uagb-tm__content,
    .uagb-tm__image-position-right.uagb-tm-stacked-mobile .uagb-tm__content {
      display: block;
      -js-display: block;
      display: block;
    }
    .uagb-tm__image-position-right.uagb-tm-stacked-mobile.uagb-tm-reverse-order-mobile
      .uagb-tm__content {
      display: -ms-inline-flexbox;
      -js-display: inline-flex;
      display: inline-flex;
      -ms-flex-direction: column-reverse;
      flex-direction: column-reverse;
    }
    .uagb-tm__image-aligned-top.uagb-tm-stacked-mobile .uagb-tm__image-content {
      display: -ms-inline-flexbox;
      -js-display: inline-flex;
      display: inline-flex;
      -ms-flex-item-align: center;
      align-self: center;
    }
  }
  .uagb-tm__arrow-outside.uagb-slick-carousel .slick-next {
    right: -45px;
  }
  [dir="rtl"] .uagb-tm__arrow-outside.uagb-slick-carousel .slick-next {
    left: -45px;
    right: auto;
  }
  .uagb-tm__arrow-inside.uagb-slick-carousel .slick-prev {
    left: 25px;
    z-index: 1;
  }
  [dir="rtl"] .uagb-tm__arrow-inside.uagb-slick-carousel .slick-prev {
    left: auto;
    right: 25px;
  }
  .uagb-tm__arrow-inside.uagb-slick-carousel .slick-next {
    right: 25px;
  }
  [dir="rtl"] .uagb-tm__arrow-inside.uagb-slick-carousel .slick-next {
    left: 25px;
    right: auto;
  }
  @media (max-width: 976px) {
    .uagb-tm__arrow-outside.uagb-slick-carousel .slick-prev {
      left: 15px;
      z-index: 1;
    }
    [dir="rtl"] .uagb-tm__arrow-outside.uagb-slick-carousel .slick-prev {
      left: auto;
      right: 15px;
    }
    .uagb-tm__arrow-outside.uagb-slick-carousel .slick-next {
      right: 15px;
    }
    [dir="rtl"] .uagb-tm__arrow-outside.uagb-slick-carousel .slick-next {
      left: 15px;
      right: auto;
    }
  }
  .uagb-team__outer-wrap .uagb-team__prefix {
    font-size: 15px;
    font-style: italic;
    color: #888;
  }
  .uagb-team__outer-wrap .uagb-team__image-wrap img {
    display: inline;
    height: auto !important;
    max-width: 100%;
    width: inherit;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    border-radius: inherit;
  }
  .uagb-team__outer-wrap
    .uagb-team__image-wrap.uagb-team__image-crop-circle
    img {
    border-radius: 100%;
  }
  .uagb-team__outer-wrap
    .uagb-team__image-wrap.uagb-team__image-crop-square
    img {
    border-radius: 0;
  }
  .uagb-team__outer-wrap .uagb-team__social-icon-wrap ul {
    list-style: none;
    display: -ms-flexbox;
    display: flex;
  }
  .uagb-team__outer-wrap .uagb-team__social-icon a span,
  .uagb-team__outer-wrap .uagb-team__social-icon a span:before {
    color: inherit;
    font-size: inherit;
    height: inherit;
    width: inherit;
  }
  .uagb-team__outer-wrap .uagb-team__social-icon a {
    font-size: 20px;
    width: 20px;
    height: 20px;
    color: #333;
    display: block;
  }
  .uagb-team__outer-wrap .uagb-team__social-icon {
    margin-right: 20px;
    margin-left: 0;
  }
  .uagb-team__outer-wrap .uagb-team__social-list {
    margin: 0;
    padding: 0;
  }
  .uagb-team__image-position-above.uagb-team__align-center {
    text-align: center;
  }
  .uagb-team__image-position-above.uagb-team__align-left {
    text-align: left;
  }
  .uagb-team__image-position-above.uagb-team__align-right {
    text-align: right;
  }
  .uagb-team__image-position-left .uagb-team__wrap,
  .uagb-team__image-position-right .uagb-team__wrap {
    -js-display: flex;
    display: -ms-flexbox;
    display: flex;
  }
  .uagb-team__image-position-left .uagb-team__content {
    text-align: left;
  }
  .uagb-team__image-position-right .uagb-team__content {
    text-align: right;
  }
  .uagb-team__image-position-left .uagb-team__social-icon-wrap ul {
    -ms-flex-pack: start;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
  }
  .uagb-team__image-position-right .uagb-team__social-icon-wrap ul {
    -ms-flex-pack: end;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
  }
  .uagb-team__image-position-left li {
    margin-right: 5px;
  }
  .uagb-team__image-position-right li {
    margin-left: 5px;
  }
  .uagb-team__image-position-above .uagb-team__social-icon-wrap {
    display: inline-block;
  }
  .uagb-team__image-position-above.uagb-team__align-center .uagb-team__content {
    text-align: center;
  }
  .uagb-team__image-position-above.uagb-team__align-left .uagb-team__content {
    text-align: left;
  }
  .uagb-team__image-position-above.uagb-team__align-right .uagb-team__content {
    text-align: right;
  }
  @media only screen and (max-width: 976px) {
    .uagb-team__stack-tablet,
    .uagb-team__stack-tablet .uagb-team__content {
      text-align: center;
    }
    .uagb-team__stack-tablet .uagb-team__wrap {
      display: inline-block;
    }
    .uagb-team__stack-tablet .uagb-team__image-wrap {
      margin-left: auto !important;
      margin-right: auto !important;
    }
    .uagb-team__stack-tablet .uagb-team__social-icon-wrap ul {
      -ms-flex-pack: center;
      justify-content: center;
    }
  }
  @media screen and (max-width: 767px) {
    .uagb-team__stack-mobile,
    .uagb-team__stack-mobile .uagb-team__content {
      text-align: center;
    }
    .uagb-team__stack-mobile .uagb-team__wrap {
      display: inline-block;
    }
    .uagb-team__stack-mobile .uagb-team__image-wrap {
      margin-left: auto !important;
      margin-right: auto !important;
    }
    .uagb-team__stack-mobile .uagb-team__social-icon-wrap ul {
      -ms-flex-pack: center;
      justify-content: center;
    }
  }
  .uagb-social-share__outer-wrap .uagb-social-share__wrap {
    -js-display: flex;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .uagb-social-share__outer-wrap a.uagb-button__link:focus {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .uagb-social-share__outer-wrap .uagb-ss__wrapper {
    padding: 0;
    margin-left: 5px;
    margin-right: 5px;
    -webkit-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;
    display: -ms-inline-flexbox;
    display: inline-flex;
    text-align: center;
  }
  .uagb-social-share__outer-wrap .uagb-ss__source-wrap {
    display: inline-block;
  }
  .uagb-social-share__outer-wrap .uagb-ss__link {
    color: #3a3a3a;
    display: inline-table;
    line-height: 0;
    cursor: pointer;
  }
  .uagb-social-share__outer-wrap .uagb-ss__source-icon {
    font-size: 40px;
    width: 40px;
    height: 40px;
  }
  .uagb-social-share__outer-wrap .uagb-ss__source-image {
    width: 40px;
  }
  .uagb-social-share__outer-wrap .uagb-ss__wrapper:first-child {
    margin-left: 0;
  }
  .uagb-social-share__outer-wrap .uagb-ss__wrapper:last-child {
    margin-right: 0;
  }
  .uagb-google-map__wrap {
    display: -ms-flexbox;
    display: flex;
  }
  .uagb-google-map__wrap .uagb-google-map__iframe {
    width: 100%;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: none;
    padding: 0;
    margin: 0;
  }
  .uagb-icon-list__outer-wrap .uagb-icon-list__wrap {
    -js-display: flex;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: flex-start;
    align-items: flex-start;
    -ms-flex-pack: flex-start;
    justify-content: flex-start;
  }
  .uagb-icon-list__outer-wrap a.uagb-icon-list__wrapper,
  .uagb-icon-list__outer-wrap a.uagb-icon-list__wrapper:focus,
  .uagb-icon-list__outer-wrap a.uagb-icon-list__wrapper:active,
  .uagb-icon-list__outer-wrap a.uagb-icon-list__wrapper:visited {
    text-decoration: none;
  }
  .uagb-icon-list__outer-wrap a.uagb-button__link:focus {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .uagb-icon-list__outer-wrap .uagb-icon-list__wrapper > p {
    display: none;
  }
  .uagb-icon-list__outer-wrap .uagb-icon-list__wrapper {
    padding: 0;
    margin-left: 5px;
    margin-right: 5px;
    -webkit-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;
    display: -ms-inline-flexbox;
    display: inline-flex;
    text-align: center;
  }
  .uagb-icon-list__outer-wrap .uagb-icon-list__content-wrap,
  .uagb-icon-list__outer-wrap .uagb-icon-list__source-wrap {
    width: inherit;
    display: inline-block;
  }
  .uagb-icon-list__outer-wrap .uagb-icon-list__source-wrap {
    display: inherit;
    -ms-flex-align: center;
    align-items: center;
  }
  .uagb-icon-list__outer-wrap .uagb-icon-list__content-wrap {
    color: #3a3a3a;
    -js-display: flex;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
  }
  .uagb-icon-list__outer-wrap .uagb-icon-list__source-icon,
  .uagb-icon-list__outer-wrap .uagb-icon-list__source-icon:before {
    font-size: 40px;
    width: 40px;
    height: 40px;
  }
  .uagb-icon-list__outer-wrap .uagb-icon-list__source-icon svg {
    display: block;
  }
  .uagb-icon-list__outer-wrap .uagb-icon-list__source-image {
    width: 40px;
  }
  .uagb-icon-list__outer-wrap .uagb-icon-list__wrapper:first-child {
    margin-left: 0;
  }
  .uagb-icon-list__outer-wrap .uagb-icon-list__wrapper:last-child {
    margin-right: 0;
  }
  .uagb-icon-list__outer-wrap .uagb-icon-list__wrap > p {
    display: none;
  }
  .uagb-icon-list__outer-wrap:not(.uagb-icon-list__no-label)
    .uagb-icon-list__source-wrap {
    margin-right: 15px;
  }
  .uagb-icon-list__outer-wrap.uagb-icon-list__icon-at-top
    .uagb-icon-list__source-wrap {
    -ms-flex-item-align: flex-start;
    align-self: flex-start;
    margin-top: 5px;
  }
  .uagb-rest_menu__wrap {
    position: relative;
    padding-left: 5px;
    padding-right: 5px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .uagb-rest_menu__wrap,
  .uagb-rest_menu__wrap * {
    -webkit-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;
  }
  .uagb-rm__image img,
  .slick-slide .uagb-rm__image img {
    display: inline-block;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
  }
  .uagb-rm__title,
  .uagb-rm__price {
    display: inline-block;
  }
  .uagb-rm__desc {
    margin-bottom: 15px;
    font-style: italic;
  }
  .uagb-rm__content {
    overflow: hidden;
    text-align: left;
    word-break: break-word;
    padding: 15px;
    border-radius: inherit;
    position: relative;
    padding: 5px;
  }
  .uagb-rm__image-position-left .uagb-rm__content,
  .uagb-rm__image-position-right .uagb-rm__content {
    display: -ms-flexbox;
    -js-display: flex;
    display: flex;
  }
  .uagb-rm-details {
    display: table;
    width: 100%;
  }
  .uagb-rm__title-wrap,
  .uagb-rm__price-wrap {
    display: table-cell;
  }
  .uagb-rm__title-wrap,
  .uagb-rm__image-position-left.uagb-rm__align-center .uagb-rm__price-wrap,
  .uagb-rm__image-position-right.uagb-rm__align-center .uagb-rm__price-wrap {
    width: 85%;
  }
  .uagb-rm__price-wrap,
  .uagb-rm__image-position-left.uagb-rm__align-center .uagb-rm__price-wrap,
  .uagb-rm__image-position-right.uagb-rm__align-center .uagb-rm__price-wrap {
    width: 15%;
  }
  .uagb-rm__title,
  .uagb-rm__price {
    display: block;
  }
  .uagb-rm__align-center .uagb-rm-details,
  .uagb-rm__align-center .uagb-rm__title-wrap,
  .uagb-rm__align-center .uagb-rm__price-wrap {
    display: block;
    width: 100%;
  }
  .uagb-rm__image-aligned-middle .uagb-rm__image-content {
    -ms-flex-item-align: center;
    align-self: center;
  }
  .uagb-rm__image {
    overflow: hidden;
  }
  .uagb-rm__title {
    margin-bottom: 5px;
    font-size: 20px;
  }
  .uagb-rm__price {
    font-style: italic;
    text-align: right;
  }
  .uagb-rm__image-position-center.uagb-rm__align-center .uagb-rm-details,
  .uagb-rm__image-position-center.uagb-rm__align-center .uagb-rm__title-wrap,
  .uagb-rm__image-position-center.uagb-rm__align-center .uagb-rm__price-wrap {
    display: block;
    width: 100%;
    text-align: center;
  }
  .uagb-rm__align-center .uagb-rm__price {
    text-align: center;
  }
  .uagb-rm__align-right .uagb-rm-details {
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }
  .uagb-rm__align-right .uagb-rm__price {
    text-align: left;
  }
  .uagb-rm__align-left .uagb-rm__price {
    text-align: right;
  }
  .uagb-rm__image-position-left.uagb-rm__align-left .uagb-rm__price,
  .uagb-rm__image-position-left.uagb-rm__align-right .uagb-rm__price,
  .uagb-rm__image-position-left.uagb-rm__align-center .uagb-rm__price {
    text-align: right;
  }
  .uagb-rm__image-position-left.uagb-rm__align-left .uagb-rm-details,
  .uagb-rm__image-position-left.uagb-rm__align-right .uagb-rm-details,
  .uagb-rm__image-position-left.uagb-rm__align-center .uagb-rm-details {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: unset;
    flex-direction: unset;
    text-align: left;
  }
  .uagb-rm__image-position-left.uagb-rm__align-left .uagb-rm__title-wrap,
  .uagb-rm__image-position-left.uagb-rm__align-right .uagb-rm__title-wrap,
  .uagb-rm__image-position-left.uagb-rm__align-center .uagb-rm__title-wrap,
  .uagb-rm__image-position-left.uagb-rm__align-left .uagb-rm__image-content,
  .uagb-rm__image-position-left.uagb-rm__align-right .uagb-rm__image-content,
  .uagb-rm__image-position-left.uagb-rm__align-center .uagb-rm__image-content {
    text-align: left;
  }
  .uagb-rm__image-position-right.uagb-rm__align-left .uagb-rm-details,
  .uagb-rm__image-position-right.uagb-rm__align-right .uagb-rm-details,
  .uagb-rm__image-position-right.uagb-rm__align-center .uagb-rm-details {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
    text-align: right;
  }
  .uagb-rm__image-position-right.uagb-rm__align-left .uagb-rm__price,
  .uagb-rm__image-position-right.uagb-rm__align-right .uagb-rm__price,
  .uagb-rm__image-position-right.uagb-rm__align-center .uagb-rm__price {
    text-align: left;
  }
  .uagb-rm__image-position-right.uagb-rm__align-left .uagb-rm__title-wrap,
  .uagb-rm__image-position-right.uagb-rm__align-right .uagb-rm__title-wrap,
  .uagb-rm__image-position-right.uagb-rm__align-center .uagb-rm__title-wrap,
  .uagb-rm__image-position-right.uagb-rm__align-left .uagb-rm__image-content,
  .uagb-rm__image-position-right.uagb-rm__align-right .uagb-rm__image-content,
  .uagb-rm__image-position-right.uagb-rm__align-center .uagb-rm__image-content {
    text-align: right;
  }
  .uagb-rest_menu__outer-wrap {
    position: relative;
  }
  .uagb-rm__overlay {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background: transparent;
  }
  .uagb-tm-parent {
    padding: 30px;
  }
  .uagb-rm__text-wrap {
    position: relative;
    display: block;
    width: 100%;
  }
  .uagb-rest_menu__wrap {
    position: relative;
  }
  .uagb-rest_menu__outer-wrap:after {
    content: "";
    display: block;
    clear: both;
  }
  .uagb-rest_menu__wrap.uagb-rm__desk-column-3 {
    display: block;
    width: 33%;
    float: left;
    width: calc(100% / 3);
    padding-left: 10px;
    padding-right: 10px;
  }
  .uagb-rest_menu__wrap.uagb-rm__desk-column-2 {
    display: block;
    width: 49%;
    float: left;
    padding-left: 10px;
    padding-right: 10px;
  }
  .uagb-rest_menu__wrap.uagb-rm__desk-column-1 {
    display: block;
    width: 100%;
    float: left;
    padding-left: 10px;
    padding-right: 10px;
  }
  .uagb-rm__separator-parent {
    line-height: 0em;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 10px;
    -js-display: flex;
    display: -moz-flexbox;
    display: -ms-flexbox;
    display: flex;
  }
  .uagb-rm__separator {
    width: 100%;
    border-top-width: 1px;
    border-top-color: #b2b4b5;
    border-top-style: inherit;
  }
  .uagb-rm__image-position-left .uagb-rm__image {
    margin-right: 10px;
  }
  .uagb-rm__image-position-right .uagb-rm__image {
    margin-left: 10px;
  }
  @media (max-width: 976px) {
    .uagb-rm__image-position-left.uagb-rm-stacked-tablet .uagb-rm__content,
    .uagb-rm__image-position-right.uagb-rm-stacked-tablet .uagb-rm__content {
      display: block;
      -js-display: block;
      display: block;
    }
    .uagb-rm__image-position-right.uagb-rm-stacked-tablet.uagb-rm-reverse-order-tablet
      .uagb-rm__content {
      display: -ms-flexbox;
      -js-display: flex;
      display: -moz-flexbox;
      display: flex;
      -ms-flex-direction: column-reverse;
      flex-direction: column-reverse;
    }
    .uagb-rest_menu__wrap.uagb-rm__tablet-column-3 {
      width: 33%;
      float: left;
      padding-left: 10px;
      padding-right: 10px;
    }
    .uagb-rest_menu__wrap.uagb-rm__tablet-column-2 {
      width: 50%;
      float: left;
      padding-left: 10px;
      padding-right: 10px;
    }
    .uagb-rest_menu__wrap.uagb-rm__tablet-column-1 {
      width: 100%;
      float: left;
      padding-left: 10px;
      padding-right: 10px;
    }
    .uagb-rm__image-position-right.uagb-rm-stacked-tablet.uagb-rm__image-aligned-middle
      .uagb-rm__image-content {
      -ms-flex-item-align: end;
      align-self: flex-end;
    }
    .uagb-rm__image-position-left.uagb-rm-stacked-tablet.uagb-rm__image-aligned-middle
      .uagb-rm__image-content {
      -ms-flex-item-align: start;
      align-self: flex-start;
    }
  }
  @media (max-width: 767px) {
    .uagb-rm__image-position-left.uagb-rm-stacked-mobile .uagb-rm__content,
    .uagb-rm__image-position-right.uagb-rm-stacked-mobile .uagb-rm__content {
      display: block;
      -js-display: block;
      display: block;
    }
    .uagb-rm__image-position-right.uagb-rm-stacked-mobile.uagb-rm-reverse-order-mobile
      .uagb-rm__content {
      display: -ms-flexbox;
      -js-display: flex;
      display: -moz-flexbox;
      display: flex;
      -ms-flex-direction: column-reverse;
      flex-direction: column-reverse;
    }
    .uagb-rest_menu__wrap.uagb-rm__mobile-column-3 {
      width: 33%;
      float: left;
      padding-left: 10px;
      padding-right: 10px;
    }
    .uagb-rest_menu__wrap.uagb-rm__mobile-column-2 {
      width: 50%;
      float: left;
      padding-left: 10px;
      padding-right: 10px;
    }
    .uagb-rest_menu__wrap.uagb-rm__mobile-column-1 {
      width: 100%;
      float: left;
      padding-left: 10px;
      padding-right: 10px;
    }
    .uagb-rm__image-position-right.uagb-rm-stacked-mobile.uagb-rm__image-aligned-middle
      .uagb-rm__image-content {
      -ms-flex-item-align: end;
      align-self: flex-end;
    }
    .uagb-rm__image-position-left.uagb-rm-stacked-mobile.uagb-rm__image-aligned-middle
      .uagb-rm__image-content {
      -ms-flex-item-align: start;
      align-self: flex-start;
    }
  }
  .uagb-timeline__widget {
    position: relative;
    -js-display: flex;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: start;
    align-items: flex-start;
  }
  .uagb-timeline__widget a {
    text-decoration: none;
    color: inherit;
  }
  .uagb-timeline__heading a {
    font-size: inherit;
    color: inherit;
    margin-bottom: inherit;
  }
  .uagb-timeline__image a {
    display: block;
    position: relative;
    max-width: 100%;
  }
  .uagb-timeline__image img {
    display: inline-block;
    -webkit-box-sizing: content-box;
    -mz-box-sizing: content-box;
    box-sizing: content-box;
  }
  .uagb-timeline__author {
    text-transform: uppercase;
  }
  .uagb-timeline__main {
    position: relative;
  }
  .uagb-content {
    word-break: break-word;
  }
  a.uagb-timeline__link {
    padding: 5px 10px;
    display: inline-block;
  }
  h1.uagb-timeline__heading,
  h2.uagb-timeline__heading,
  h3.uagb-timeline__heading,
  h4.uagb-timeline__heading,
  h5.uagb-timeline__heading,
  h6.uagb-timeline__heading {
    margin-bottom: 0px;
  }
  .uagb-timeline__inner-date-new p {
    margin-bottom: 0;
  }
  .uagb-timeline__date-inner .uagb-timeline__inner-date-new p {
    margin-bottom: 0px;
  }
  .uagb-timeline__line {
    background-color: #eeeeee;
  }
  .uagb-timeline__line__inner {
    background-color: #5cb85c;
    width: 100%;
  }
  .uagb-timeline__main .uagb-timeline__icon-new {
    line-height: 1em;
    display: inline-block;
    vertical-align: middle;
    font-style: normal;
  }
  .uagb-timeline__center-block .uagb-timeline__date-hide {
    display: none;
  }
  .uagb-timeline__field:not(:last-child) {
    margin-bottom: 20px;
  }
  .uagb-timeline__center-block .uagb-timeline__widget.uagb-timeline__right {
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }
  .uagb-timeline__right-block .uagb-timeline__widget {
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }
  .uagb-timeline__left-block
    .uagb-timeline__day-left
    .uagb-timeline__events-inner-new,
  .uagb-timeline__left-block
    .uagb-timeline__day-right
    .uagb-timeline__events-inner-new {
    text-align: left;
  }
  .uagb-timeline__right-block
    .uagb-timeline__day-left
    .uagb-timeline__events-inner-new,
  .uagb-timeline__right-block
    .uagb-timeline__day-right
    .uagb-timeline__events-inner-new {
    text-align: inherit;
  }
  .uagb-timeline__center-block .uagb-timeline__date-new {
    display: block;
  }
  .uagb-timeline__right-block .uagb-timeline__line {
    right: 16px;
    left: auto;
  }
  .uagb-timeline__right-block .uagb-timeline__right .uagb-timeline__arrow:after,
  .uagb-timeline__right-block .uagb-timeline__left .uagb-timeline__arrow:after {
    top: 0;
  }
  .uagb-timeline__right-block .uagb-timeline__right .uagb-timeline__arrow,
  .uagb-timeline__right-block .uagb-timeline__left .uagb-timeline__arrow {
    top: 0;
    right: 0;
    width: 10px;
    height: 40px;
    position: absolute;
  }
  .uagb-timeline__right-block .uagb-timeline__right .uagb-timeline__arrow {
    right: -12px;
  }
  .uagb-timeline__right-block .uagb-timeline__left .uagb-timeline__arrow {
    right: -10px;
  }
  .uagb-timeline__right-block .uagb-timeline__marker,
  .uagb-timeline__right-block .uagb-timeline__day-new {
    max-width: 100%;
    position: relative;
  }
  .uagb-timeline__right-block .uagb-timeline__day-new {
    margin-right: 14px;
  }
  .uagb-timeline__right-block .uagb-timeline__marker {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
  }
  .uagb-timeline__right-block .uagb-timeline__day-new {
    -ms-flex-positive: 1;
    flex-grow: 1;
  }
  .uagb-timeline__left-block .uagb-timeline__marker,
  .uagb-timeline__left-block .uagb-timeline__day-new {
    max-width: 100%;
    position: relative;
  }
  .uagb-timeline__left-block .uagb-timeline__line {
    left: 20px;
    right: auto;
  }
  .uagb-timeline__left-block .uagb-timeline__day-new {
    margin-left: 14px;
  }
  .uagb-timeline__left-block .uagb-timeline__marker {
    -ms-flex-order: 0;
    order: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
  }
  .uagb-timeline__left-block .uagb-timeline__day-new {
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-order: 1;
    order: 1;
  }
  .uagb-timeline__left-block .uagb-timeline__right .uagb-timeline__arrow:after,
  .uagb-timeline__left-block .uagb-timeline__left .uagb-timeline__arrow:after {
    top: 0;
  }
  .uagb-timeline__left-block .uagb-timeline__right .uagb-timeline__arrow,
  .uagb-timeline__left-block .uagb-timeline__left .uagb-timeline__arrow {
    top: 0;
    width: 10px;
    height: 40px;
    position: absolute;
  }
  .uagb-timeline__left-block .uagb-timeline__right .uagb-timeline__arrow {
    left: -10px;
  }
  .uagb-timeline__left-block .uagb-timeline__left .uagb-timeline__arrow {
    left: -12px;
  }
  .uagb-timeline__left-block .uagb-timeline__right .uagb-timeline__arrow:after,
  .uagb-timeline__left-block .uagb-timeline__left .uagb-timeline__arrow:after,
  .uagb-timeline__right-block .uagb-timeline__right .uagb-timeline__arrow:after,
  .uagb-timeline__right-block .uagb-timeline__left .uagb-timeline__arrow:after {
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .uagb-timeline__marker {
    background-color: #eeeeee;
    border-radius: 999px;
    position: relative;
    -js-display: flex;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    z-index: 1;
    -webkit-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
  .uagb-timeline__main
    .uagb-timeline__days
    .uagb-timeline__field-wrap:hover
    .uagb-timeline__marker {
    -webkit-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
  .uagb-timeline__center-block .uagb-timeline__marker {
    -ms-flex-order: 1;
    order: 1;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
  }
  .uagb-timeline__center-block .uagb-timeline__day-new,
  .uagb-timeline__center-block .uagb-timeline__date-new {
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    max-width: 100%;
    position: relative;
  }
  .uagb-timeline__center-block .uagb-timeline__right .uagb-timeline__day-new {
    -ms-flex-order: 2;
    order: 2;
    padding-left: 0;
    padding-right: 12px;
  }
  .uagb-timeline__center-block .uagb-timeline__left .uagb-timeline__day-new {
    -ms-flex-order: 2;
    order: 2;
    padding-right: 0;
    padding-left: 12px;
  }
  .uagb-timeline__events-inner-new {
    padding: 40px;
  }
  .uagb-timeline__center-block .uagb-timeline__left .uagb-timeline__date-new {
    -js-display: flex;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
  .uagb-timeline__center-block .uagb-timeline__right .uagb-timeline__date-new {
    -js-display: flex;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
  .uagb-timeline__left-block .uagb-timeline__date-new {
    margin-right: 10px;
  }
  .uagb-timeline__right-block .uagb-timeline__date-new {
    margin-left: 10px;
  }
  .uagb-timeline__right-block .uagb-timeline__date-new {
    -js-display: flex;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
  }
  .uagb-timeline__center-block .uagb-timeline__right .uagb-timeline__arrow {
    right: 0px;
    top: 0;
    width: 10px;
    height: 40px;
    position: absolute;
  }
  .uagb-timeline__center-block
    .uagb-timeline__right
    .uagb-timeline__arrow:after,
  .uagb-timeline__center-block
    .uagb-timeline__left
    .uagb-timeline__arrow:after {
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .uagb-timeline__center-block .uagb-timeline__left .uagb-timeline__arrow {
    left: 0px;
    top: 0;
    width: 10px;
    height: 40px;
    position: absolute;
  }
  .uagb-timeline__arrow-center .uagb-timeline__widget {
    -ms-flex-align: center;
    align-items: center;
  }
  .uagb-timeline__arrow-bottom .uagb-timeline__widget {
    -ms-flex-align: end;
    align-items: flex-end;
  }
  .uagb-timeline__arrow-center .uagb-timeline__left .uagb-timeline__arrow,
  .uagb-timeline__arrow-center .uagb-timeline__right .uagb-timeline__arrow {
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .uagb-timeline__arrow-bottom .uagb-timeline__left .uagb-timeline__arrow,
  .uagb-timeline__arrow-bottom .uagb-timeline__right .uagb-timeline__arrow {
    top: 100%;
    -webkit-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  .uagb-timeline__day-right .uagb-timeline__events-inner {
    text-align: right;
  }
  .uagb-timeline__day-left .uagb-timeline__events-inner {
    text-align: left;
  }
  .uagb-timeline__arrow-top .uagb-timeline__date-new .uagb-timeline__date-new,
  .uagb-timeline__arrow-bottom
    .uagb-timeline__date-new
    .uagb-timeline__date-new {
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .uagb-timeline__events-inner-new,
  .uagb-timeline__arrow {
    -webkit-transition: background 0.2s ease-in-out;
    -o-transition: background 0.2s ease-in-out;
    transition: background 0.2s ease-in-out;
  }
  .uagb-timeline__arrow:after {
    -webkit-transition: border-color 0.2s ease-in-out;
    -o-transition: border-color 0.2s ease-in-out;
    transition: border-color 0.2s ease-in-out;
  }
  .uagb-timeline__date-new {
    -webkit-transition: color 0.2s ease-in-out;
    -o-transition: color 0.2s ease-in-out;
    transition: color 0.2s ease-in-out;
  }
  .uagb-timeline__widget.uagb-timeline__left.hide-events
    .uagb-timeline__events-inner-new,
  .uagb-timeline__widget.uagb-timeline__left.hide-events
    .uagb-timeline__date-new {
    visibility: hidden;
  }
  .uagb-timeline__widget.uagb-timeline__right.hide-events
    .uagb-timeline__events-inner-new,
  .uagb-timeline__widget.uagb-timeline__right.hide-events
    .uagb-timeline__date-new {
    visibility: hidden;
  }
  .uagb-timeline__main .uagb-timeline__year {
    -js-display: flex;
    display: -ms-flexbox;
    display: flex;
    position: relative;
  }
  .uagb-timeline__main .uagb-timeline__year span {
    display: inline-block;
    padding-bottom: 6px;
  }
  .uagb-timeline__day-left .uagb-timeline__arrow:after {
    content: "";
    left: 0px;
    position: absolute;
    display: inline;
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
  }
  .uagb-timeline__right .uagb-timeline__day-left .uagb-timeline__arrow:after {
    right: 0;
  }
  .uagb-timeline__day-right .uagb-timeline__arrow:after {
    content: "";
    right: 0px;
    position: absolute;
    display: inline;
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
  }
  .uagb-timeline__icon {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-align: center;
    line-height: 100px;
    vertical-align: middle;
    position: relative;
    z-index: 1;
  }
  .uagb-timeline__main .uagb-timeline__date .uagb-timeline__inner-date-new {
    white-space: nowrap;
    margin: 0px;
  }
  .uagb-timeline__main .uagb-timeline__line {
    position: absolute;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  .uagb-timeline__right-block .uagb-timeline__main .uagb-timeline__line {
    position: absolute;
    -webkit-transform: translateX(50%);
    -ms-transform: translateX(50%);
    transform: translateX(50%);
  }
  .uagb-timeline__center-block .uagb-timeline__line {
    left: 50%;
    right: auto;
  }
  .uagb-timeline__main .in-view i.uagb-timeline__in-view-icon {
    -webkit-transition: background 0.25s ease-out 0.25s, width 0.25s ease-in-out,
      height 0.25s ease-in-out, color 0.25s ease-in-out,
      font-size 0.25s ease-in-out;
    -webkit-transition: background 0.25s ease-out 0.25s, width 0.25s ease-in-out,
      height 0.25s ease-in-out, color 0.25s ease-in-out,
      font-size 0.25s ease-out;
    -o-transition: background 0.25s ease-out 0.25s, width 0.25s ease-in-out,
      height 0.25s ease-in-out, color 0.25s ease-in-out,
      font-size 0.25s ease-out;
    transition: background 0.25s ease-out 0.25s, width 0.25s ease-in-out,
      height 0.25s ease-in-out, color 0.25s ease-in-out,
      font-size 0.25s ease-out;
  }
  .uagb-timeline__left-block .uagb-timeline__days {
    text-align: left;
  }
  .uagb-timeline__left-block
    .uagb-timeline__day-right
    .uagb-timeline__arrow:after {
    content: "";
    position: absolute;
    display: inline;
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
  }
  .uagb-timeline__center-block .uagb-timeline__days {
    text-align: center;
  }
  .uagb-timeline__center-block
    .uagb-timeline__day-right
    .uagb-timeline__arrow:after {
    content: "";
    right: 0px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    position: absolute;
    display: inline;
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
  }
  .uagb-timeline__right .uagb-timeline__days {
    text-align: right;
  }
  .uagb-timeline__outer-wrap span.dashicons-admin-users.dashicons {
    display: inline;
    vertical-align: baseline;
    margin-right: 4px;
  }
  @media screen and (max-width: 1023px) {
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__line {
      position: absolute;
      -webkit-transform: translateX(50%);
      -ms-transform: translateX(50%);
      transform: translateX(50%);
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__date-hide {
      display: block;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__day-left
      .uagb-timeline__events-inner-new,
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__day-right
      .uagb-timeline__events-inner-new {
      text-align: left;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__line {
      right: 20px;
      left: auto;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__marker,
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__day-new {
      max-width: 100%;
      position: relative;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__line {
      left: 20px;
      right: auto;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__day-new {
      margin-left: 16px;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__marker {
      -ms-flex-order: 0;
      order: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      -ms-flex-positive: 0;
      flex-grow: 0;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__day-new {
      -ms-flex-positive: 1;
      flex-grow: 1;
      -ms-flex-order: 1;
      order: 1;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__right
      .uagb-timeline__arrow:after,
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__left
      .uagb-timeline__arrow:after {
      top: 0;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__right
      .uagb-timeline__arrow,
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__left
      .uagb-timeline__arrow {
      width: 10px;
      height: 40px;
      position: absolute;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__right
      .uagb-timeline__arrow {
      left: -10px;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__left
      .uagb-timeline__arrow {
      left: -12px;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__right
      .uagb-timeline__arrow:after,
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__left
      .uagb-timeline__arrow:after {
      top: 50%;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__days {
      text-align: left;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__day-right
      .uagb-timeline__arrow:after {
      content: "";
      position: absolute;
      display: inline;
      width: 0;
      height: 0;
      border-top: 12px solid transparent;
      border-bottom: 12px solid transparent;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__widget.uagb-timeline__right {
      -ms-flex-direction: unset;
      flex-direction: unset;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__date-new {
      display: none;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__day-new,
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__date-new {
      -ms-flex-positive: unset;
      flex-grow: unset;
      -ms-flex-preferred-size: unset;
      flex-basis: unset;
      max-width: 100%;
      width: 100%;
      position: relative;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__right
      .uagb-timeline__day-new {
      -ms-flex-order: unset;
      order: unset;
      padding-left: 0;
      padding-right: 0;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__left
      .uagb-timeline__day-new {
      -ms-flex-order: unset;
      order: unset;
      padding-right: 0;
      padding-left: 0;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__left
      .uagb-timeline__date-new {
      display: none;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__right
      .uagb-timeline__date-new {
      display: none;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__widget {
      -ms-flex-direction: row-reverse;
      flex-direction: row-reverse;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__day-left
      .uagb-timeline__events-inner-new,
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__day-right
      .uagb-timeline__events-inner-new {
      text-align: right;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__line {
      right: 16px;
      left: auto;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__right
      .uagb-timeline__arrow:after,
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__left
      .uagb-timeline__arrow:after {
      top: 0;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__right
      .uagb-timeline__arrow,
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__left
      .uagb-timeline__arrow {
      left: auto;
      right: 0;
      width: 10px;
      height: 40px;
      position: absolute;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__right
      .uagb-timeline__arrow {
      right: -12px;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__left
      .uagb-timeline__arrow {
      right: -10px;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__marker,
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__day-new {
      max-width: 100%;
      position: relative;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__day-new {
      margin-right: 16px;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__marker {
      -ms-flex-negative: 0;
      flex-shrink: 0;
      -ms-flex-positive: 0;
      flex-grow: 0;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__day-new {
      -ms-flex-positive: 1;
      flex-grow: 1;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__right
      .uagb-timeline__arrow:after,
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__left
      .uagb-timeline__arrow:after {
      top: 50%;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__days {
      text-align: right;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__day-new,
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__date-new {
      -ms-flex-positive: unset;
      flex-grow: unset;
      -ms-flex-preferred-size: unset;
      flex-basis: unset;
      max-width: 100%;
      position: relative;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__right
      .uagb-timeline__day-new {
      -ms-flex-order: unset;
      order: unset;
      padding-left: 0;
      padding-right: 0;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__left
      .uagb-timeline__day-new {
      -ms-flex-order: unset;
      order: unset;
      padding-right: 0;
      padding-left: 0;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__left
      .uagb-timeline__date-new {
      display: none;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__right
      .uagb-timeline__date-new {
      display: none;
    }
  }
  @media screen and (max-width: 767px) {
    .uagb-timeline-responsive-none .uagb-timeline__events-inner-new {
      padding: 15px;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline__date-hide {
      display: block;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline__day-left
      .uagb-timeline__events-inner-new,
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline__day-right
      .uagb-timeline__events-inner-new {
      text-align: left;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline__line {
      right: 20px;
      left: auto;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline__marker,
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline__day-new {
      max-width: 100%;
      position: relative;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline__line {
      left: 20px;
      right: auto;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline__day-new {
      margin-left: 16px;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline__marker {
      -ms-flex-order: 0;
      order: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      -ms-flex-positive: 0;
      flex-grow: 0;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline__day-new {
      -ms-flex-positive: 1;
      flex-grow: 1;
      -ms-flex-order: 1;
      order: 1;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline__right
      .uagb-timeline__arrow:after,
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline__left
      .uagb-timeline__arrow:after {
      top: 0;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline__right
      .uagb-timeline__arrow,
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline__left
      .uagb-timeline__arrow {
      width: 10px;
      height: 40px;
      position: absolute;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline__right
      .uagb-timeline__arrow {
      left: -10px;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline__left
      .uagb-timeline__arrow {
      left: -12px;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline__right
      .uagb-timeline__arrow:after,
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline__left
      .uagb-timeline__arrow:after {
      top: 50%;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
    }
    .uagb-timeline__day-left .uagb-timeline__events-inner-new {
      text-align: left;
    }
    .uagb-timeline__left-block .uagb-timeline__date-new {
      margin-right: 10px;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline__days {
      text-align: left;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline__day-right
      .uagb-timeline__arrow:after {
      content: "";
      position: absolute;
      display: inline;
      width: 0;
      height: 0;
      border-top: 12px solid transparent;
      border-bottom: 12px solid transparent;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline__widget.uagb-timeline__right {
      -ms-flex-direction: unset;
      flex-direction: unset;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline__date-new {
      display: none;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline__day-new,
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline__date-new {
      -ms-flex-positive: unset;
      flex-grow: unset;
      -ms-flex-preferred-size: unset;
      flex-basis: unset;
      max-width: 100%;
      position: relative;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline__right
      .uagb-timeline__day-new {
      -ms-flex-order: unset;
      order: unset;
      padding-left: 0;
      padding-right: 0;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline__left
      .uagb-timeline__day-new {
      -ms-flex-order: unset;
      order: unset;
      padding-right: 0;
      padding-left: 0;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline__left
      .uagb-timeline__date-new {
      display: none;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline__right
      .uagb-timeline__date-new {
      display: none;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline-res-right
      .uagb-timeline__widget {
      -ms-flex-direction: row-reverse;
      flex-direction: row-reverse;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline-res-right
      .uagb-timeline__day-left
      .uagb-timeline__events-inner-new,
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline-res-right
      .uagb-timeline__day-right
      .uagb-timeline__events-inner-new {
      text-align: right;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline-res-right
      .uagb-timeline__line {
      right: 16px;
      left: auto;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline-res-right
      .uagb-timeline__right
      .uagb-timeline__arrow:after,
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline-res-right
      .uagb-timeline__left
      .uagb-timeline__arrow:after {
      top: 0;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline-res-right
      .uagb-timeline__right
      .uagb-timeline__arrow,
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline-res-right
      .uagb-timeline__left
      .uagb-timeline__arrow {
      left: auto;
      right: 0;
      width: 10px;
      height: 40px;
      position: absolute;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline-res-right
      .uagb-timeline__right
      .uagb-timeline__arrow {
      right: -12px;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline-res-right
      .uagb-timeline__left
      .uagb-timeline__arrow {
      right: -10px;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline-res-right
      .uagb-timeline__marker,
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline-res-right
      .uagb-timeline__day-new {
      max-width: 100%;
      position: relative;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline-res-right
      .uagb-timeline__day-new {
      margin-right: 16px;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline-res-right
      .uagb-timeline__marker {
      -ms-flex-negative: 0;
      flex-shrink: 0;
      -ms-flex-positive: 0;
      flex-grow: 0;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline-res-right
      .uagb-timeline__day-new {
      -ms-flex-positive: 1;
      flex-grow: 1;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline-res-right
      .uagb-timeline__right
      .uagb-timeline__arrow:after,
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline-res-right
      .uagb-timeline__left
      .uagb-timeline__arrow:after {
      top: 50%;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline-res-right
      .uagb-timeline__line {
      position: absolute;
      -webkit-transform: translateX(50%);
      -ms-transform: translateX(50%);
      transform: translateX(50%);
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline-res-right
      .uagb-timeline__days {
      text-align: right;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline-res-right
      .uagb-timeline__day-new,
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline-res-right
      .uagb-timeline__date-new {
      -ms-flex-positive: unset;
      flex-grow: unset;
      -ms-flex-preferred-size: unset;
      flex-basis: unset;
      max-width: 100%;
      position: relative;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline-res-right
      .uagb-timeline__right
      .uagb-timeline__day-new {
      -ms-flex-order: unset;
      order: unset;
      padding-left: 0;
      padding-right: 0;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline-res-right
      .uagb-timeline__left
      .uagb-timeline__day-new {
      -ms-flex-order: unset;
      order: unset;
      padding-right: 0;
      padding-left: 0;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline-res-right
      .uagb-timeline__left
      .uagb-timeline__date-new {
      display: none;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline-res-right
      .uagb-timeline__right
      .uagb-timeline__date-new {
      display: none;
    }
  }
  .uagb-timeline__line__inner {
    background-color: #61ce70;
    width: 100%;
  }
  .uagb-timeline__center-block
    .uagb-timeline__day-right
    .uagb-timeline__arrow:after {
    border-left: 13px solid #eeeeee;
  }
  .uagb-timeline__right-block
    .uagb-timeline__day-right
    .uagb-timeline__arrow:after {
    border-left: 13px solid #eeeeee;
  }
  .uagb-timeline__right-block
    .uagb-timeline__day-left
    .uagb-timeline__arrow:after {
    border-left: 13px solid #eeeeee;
  }
  .rtl
    .uagb-timeline__center-block
    .uagb-timeline__day-right
    .uagb-timeline__arrow:after {
    border-right: 13px solid #eeeeee;
    border-left: none;
  }
  .rtl
    .uagb-timeline__right-block
    .uagb-timeline__day-right
    .uagb-timeline__arrow:after {
    border-right: 13px solid #eeeeee;
    border-left: none;
  }
  .rtl
    .uagb-timeline__right-block
    .uagb-timeline__day-left
    .uagb-timeline__arrow:after {
    border-right: 13px solid #eeeeee;
    border-left: none;
  }
  .uagb-timeline__left-block
    .uagb-timeline__day-right
    .uagb-timeline__arrow:after {
    border-right: 13px solid #eeeeee;
  }
  .uagb-timeline__center-block
    .uagb-timeline__day-left
    .uagb-timeline__arrow:after {
    border-right: 13px solid #eeeeee;
  }
  .uagb-timeline__left-block
    .uagb-timeline__day-left
    .uagb-timeline__arrow:after {
    border-right: 13px solid #eeeeee;
  }
  .rtl
    .uagb-timeline__left-block
    .uagb-timeline__day-right
    .uagb-timeline__arrow:after {
    border-left: 13px solid #eeeeee;
    border-right: none;
  }
  .rtl
    .uagb-timeline__center-block
    .uagb-timeline__day-left
    .uagb-timeline__arrow:after {
    border-left: 13px solid #eeeeee;
    border-right: none;
  }
  .rtl
    .uagb-timeline__left-block
    .uagb-timeline__day-left
    .uagb-timeline__arrow:after {
    border-left: 13px solid #eeeeee;
    border-right: none;
  }
  .uagb-timeline__day-right .uagb-timeline__events-inner-new {
    border-radius: 4px 4px 4px 4px;
  }
  .uagb-timeline__day-left .uagb-timeline__events-inner-new {
    border-radius: 4px 4px 4px 4px;
  }
  .uagb-timeline__line {
    width: 3px;
  }
  .uagb-timeline__main .uagb-timeline__icon-new {
    font-size: 16px;
  }
  .uagb-timeline__marker {
    min-height: 3em;
    min-width: 3em;
    line-height: 3em;
  }
  .uagb-timeline__arrow {
    height: 3em;
  }
  .uagb-timeline__left-block .uagb-timeline__line {
    left: calc(3em / 2);
  }
  .uagb-timeline__right-block .uagb-timeline__line {
    right: calc(3em / 2);
  }
  .rtl .uagb-timeline__left-block .uagb-timeline__line {
    right: calc(3em / 2);
    left: auto;
  }
  .rtl .uagb-timeline__right-block .uagb-timeline__line {
    left: calc(3em / 2);
    right: auto;
  }
  .uagb-timeline-desc-content p {
    font-size: inherit;
  }
  .uagb-timeline__main p:empty {
    display: none;
  }
  @media (max-width: 976px) {
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__line {
      position: absolute;
      -webkit-transform: translateX(50%);
      -ms-transform: translateX(50%);
      transform: translateX(50%);
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__line {
      position: absolute;
      -webkit-transform: translateX(50%);
      -ms-transform: translateX(50%);
      transform: translateX(50%);
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__date-hide {
      display: block;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__day-left
      .uagb-timeline__events-inner-new,
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__day-right
      .uagb-timeline__events-inner-new {
      text-align: left;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__line {
      right: 20px;
      left: auto;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__marker,
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__day-new {
      max-width: 100%;
      position: relative;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__line {
      left: 20px;
      right: auto;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__day-new {
      margin-left: 16px;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__marker {
      -ms-flex-order: 0;
      order: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      -ms-flex-positive: 0;
      flex-grow: 0;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__day-new {
      -ms-flex-positive: 1;
      flex-grow: 1;
      -ms-flex-order: 1;
      order: 1;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__right
      .uagb-timeline__arrow:after,
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__left
      .uagb-timeline__arrow:after {
      top: 0;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__right
      .uagb-timeline__arrow,
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__left
      .uagb-timeline__arrow {
      width: 10px;
      height: 40px;
      position: absolute;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__right
      .uagb-timeline__arrow {
      left: -10px;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__left
      .uagb-timeline__arrow {
      left: -12px;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__right
      .uagb-timeline__arrow:after,
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__left
      .uagb-timeline__arrow:after {
      top: 50%;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__days {
      text-align: left;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__day-right
      .uagb-timeline__arrow:after {
      content: "";
      position: absolute;
      display: inline;
      width: 0;
      height: 0;
      border-top: 12px solid transparent;
      border-bottom: 12px solid transparent;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__widget.uagb-timeline__right {
      -ms-flex-direction: unset;
      flex-direction: unset;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__date-new {
      display: none;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__day-new,
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__date-new {
      -ms-flex-positive: unset;
      flex-grow: unset;
      -ms-flex-preferred-size: unset;
      flex-basis: unset;
      max-width: 100%;
      width: 100%;
      position: relative;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__right
      .uagb-timeline__day-new {
      -ms-flex-order: unset;
      order: unset;
      padding-left: 0;
      padding-right: 0;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__left
      .uagb-timeline__day-new {
      -ms-flex-order: unset;
      order: unset;
      padding-right: 0;
      padding-left: 0;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__left
      .uagb-timeline__date-new {
      display: none;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__right
      .uagb-timeline__date-new {
      display: none;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__widget {
      -ms-flex-direction: row-reverse;
      flex-direction: row-reverse;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__day-left
      .uagb-timeline__events-inner-new,
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__day-right
      .uagb-timeline__events-inner-new {
      text-align: right;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__line {
      right: 16px;
      left: auto;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__right
      .uagb-timeline__arrow:after,
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__left
      .uagb-timeline__arrow:after {
      top: 0;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__right
      .uagb-timeline__arrow,
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__left
      .uagb-timeline__arrow {
      left: auto;
      right: 0;
      width: 10px;
      height: 40px;
      position: absolute;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__right
      .uagb-timeline__arrow {
      right: -12px;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__left
      .uagb-timeline__arrow {
      right: -10px;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__marker,
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__day-new {
      max-width: 100%;
      position: relative;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__day-new {
      margin-right: 16px;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__marker {
      -ms-flex-negative: 0;
      flex-shrink: 0;
      -ms-flex-positive: 0;
      flex-grow: 0;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__day-new {
      -ms-flex-positive: 1;
      flex-grow: 1;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__right
      .uagb-timeline__arrow:after,
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__left
      .uagb-timeline__arrow:after {
      top: 50%;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__days {
      text-align: right;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__day-new,
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__date-new {
      -ms-flex-positive: unset;
      flex-grow: unset;
      -ms-flex-preferred-size: unset;
      flex-basis: unset;
      max-width: 100%;
      position: relative;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__right
      .uagb-timeline__day-new {
      -ms-flex-order: unset;
      order: unset;
      padding-left: 0;
      padding-right: 0;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__left
      .uagb-timeline__day-new {
      -ms-flex-order: unset;
      order: unset;
      padding-right: 0;
      padding-left: 0;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__left
      .uagb-timeline__date-new,
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline-res-right
      .uagb-timeline__right
      .uagb-timeline__date-new {
      display: none;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__day-right
      .uagb-timeline__arrow:after,
    .uagb-timeline__center-block.uagb-timeline__responsive-tablet
      .uagb-timeline__day-left
      .uagb-timeline__arrow:after {
      border-right: 13px solid #eeeeee;
      border-left: none;
    }
  }
  @media (max-width: 767px) {
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline__day-right
      .uagb-timeline__arrow:after,
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline__day-left
      .uagb-timeline__arrow:after,
    .rtl
      .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline-res-right
      .uagb-timeline__day-right
      .uagb-timeline__arrow:after,
    .rtl
      .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline-res-right
      .uagb-timeline__day-left
      .uagb-timeline__arrow:after {
      border-right: 13px solid #eeeeee;
      border-left: none;
    }
    .rtl
      .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline__day-right
      .uagb-timeline__arrow:after,
    .rtl
      .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline__day-left
      .uagb-timeline__arrow:after,
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline-res-right
      .uagb-timeline__day-right
      .uagb-timeline__arrow:after,
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline-res-right
      .uagb-timeline__day-left
      .uagb-timeline__arrow:after {
      border-left: 13px solid #eeeeee;
      border-right: none;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline__line,
    .rtl
      .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline-res-right
      .uagb-timeline__line {
      left: calc(3em / 2);
      right: auto;
    }
    .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline-res-right
      .uagb-timeline__line,
    .rtl
      .uagb-timeline__center-block.uagb-timeline__responsive-mobile
      .uagb-timeline__line {
      right: calc(3em / 2);
      left: auto;
    }
  }
  .uagb-cta__outer-wrap {
    position: relative;
  }
  .uagb-cta__outer-wrap .uagb-cta__content {
    display: inline-block;
  }
  .uagb-cta__outer-wrap a.uagb-cta__block-link span {
    font-size: inherit;
    vertical-align: middle;
    display: inline-block;
    float: left;
  }
  .uagb-cta__outer-wrap .uagb-cta__content-right .uagb-cta__link-wrapper {
    width: 30%;
  }
  .uagb-cta__outer-wrap .uagb-cta__content-right .uagb-cta__content {
    width: 70%;
  }
  .uagb-cta__outer-wrap .uagb-cta__content-right .uagb-cta__button-wrapper {
    display: inline-block;
    float: right;
  }
  .uagb-cta__outer-wrap
    .uagb-cta__link-wrapper.uagb-cta__block-link-style:empty {
    display: none;
  }
  .uagb-cta__outer-wrap a.uagb-cta__block-link,
  .uagb-cta__outer-wrap .entry .entry-content a.uagb-cta__block-link,
  .uagb-cta__outer-wrap a.uagb-cta__block-link-wrap,
  .uagb-cta__outer-wrap .entry .entry-content a.uagb-cta__block-link-wrap {
    text-decoration: none;
  }
  .uagb-cta__outer-wrap a.uagb-cta__block-link:hover,
  .uagb-cta__outer-wrap .entry .entry-content a.uagb-cta__block-link:hover,
  .uagb-cta__outer-wrap a.uagb-cta__block-link-wrap:hover,
  .uagb-cta__outer-wrap
    .entry
    .entry-content
    a.uagb-cta__block-link-wrap:hover
    .entry
    .entry-content
    a.uagb-cta__block-link:hover {
    color: inherit;
  }
  .uagb-cta__outer-wrap .uagb-cta__content-right {
    text-align: right;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
  .uagb-cta__outer-wrap .uagb-cta__left-right-wrap {
    width: 100%;
    word-break: break-word;
  }
  .uagb-cta__outer-wrap
    .uagb-cta__icon-position-below-title
    .uagb-cta__left-right-wrap {
    display: block;
    min-width: 100%;
    width: 100%;
  }
  .uagb-cta__outer-wrap
    .uagb-cta__icon-position-left
    .uagb-cta__left-right-wrap,
  .uagb-cta__outer-wrap
    .uagb-cta__icon-position-right
    .uagb-cta__left-right-wrap {
    display: -ms-flexbox;
    -js-display: flex;
    display: flex;
  }
  .uagb-cta__outer-wrap
    .uagb-cta__icon-position-right
    .uagb-cta__left-right-wrap {
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
  .uagb-cta__outer-wrap .uagb-cta__block-link-icon-after {
    margin-left: 5px;
    margin-right: 0;
  }
  .uagb-cta__outer-wrap .uagb-cta__block-link-icon-before {
    margin-left: 0;
    margin-right: 5px;
  }
  .uagb-cta__outer-wrap .uagb-cta__block-link-icon,
  .uagb-cta__outer-wrap .uagb-cta__block svg {
    -webkit-transition: all 200ms linear;
    -o-transition: all 200ms linear;
    transition: all 200ms linear;
  }
  .uagb-cta__outer-wrap .uagb-cta__block {
    position: relative;
  }
  .uagb-cta__outer-wrap .uagb-cta-typeof-button {
    display: inline-block;
    line-height: 1;
    background-color: transparent;
    color: #333;
    text-align: center;
  }
  .uagb-cta__outer-wrap .uagb-cta__content-right .uagb-cta__button-link-wrapper,
  .uagb-cta__outer-wrap .uagb-cta__content-right .uagb-cta__block-link,
  .uagb-cta__outer-wrap
    .uagb-cta__content-right.uagb-cta__button-valign-middle
    .uagb-cta__left-right-wrap {
    display: -ms-flexbox;
    -js-display: flex;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
  }
  .uagb-cta__outer-wrap .uagb-cta__content-right .uagb-cta__button-link-wrapper,
  .uagb-cta__outer-wrap .uagb-cta__content-right .uagb-cta__block-link {
    -ms-flex-pack: center;
    justify-content: center;
  }
  .uagb-cta__outer-wrap .uagb-cta__link-wrapper a {
    -webkit-box-shadow: none;
    box-shadow: none;
    text-decoration: none;
  }
  .uagb-cta__outer-wrap .uagb-cta__title-wrap .uagb-cta__title {
    padding: 0;
    margin: 0;
    display: block;
  }
  .uagb-cta__outer-wrap .uagb-cta__block,
  .uagb-cta__outer-wrap .uagb-cta__content {
    z-index: 1;
  }
  .uagb-cta__outer-wrap .uagb-cta__left-right-wrap {
    z-index: 1;
  }
  .uagb-cta__outer-wrap .uagb-cta__block-link {
    cursor: pointer;
  }
  .uagb-cta__outer-wrap .uagb-cta__content-right .uagb-cta__block-link {
    display: inline-block;
    float: right;
    padding: 10px 14px;
  }
  .uagb-cta__outer-wrap a.uagb-cta__block-link-wrap {
    color: inherit;
  }
  .uagb-cta__outer-wrap .uagb-cta__content p:empty {
    display: none;
  }
  .uagb-cta__outer-wrap .uagb-cta__button-type-none .uagb-cta__content {
    width: 100%;
  }
  .uagb-cta__outer-wrap .uagb-cta-with-svg {
    height: 14px;
    width: 14px;
    line-height: 14px;
    display: inline-block;
    vertical-align: middle;
  }
  .uagb-cta__outer-wrap .uagb-cta__block svg {
    display: block;
    height: inherit;
    width: inherit;
  }
  .uagb-cta__outer-wrap .uagb-cta__align-button-after {
    margin-left: 5px;
  }
  .uagb-cta__outer-wrap .uagb-cta__align-button-before {
    margin-right: 5px;
  }
  .uagb-cta__outer-wrap .uagb-cta__block-link i {
    font-style: normal;
  }
  .uagb-cta__outer-wrap a.uagb-cta__link-to-all {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 11;
  }
  @media only screen and (max-width: 976px) {
    .uagb-cta__content-stacked-tablet .uagb-cta__left-right-wrap {
      -ms-flex-direction: column;
      flex-direction: column;
      text-align: center;
    }
    .uagb-cta__content-stacked-tablet.uagb-cta__content-right
      .uagb-cta__button-wrapper {
      display: inline-block;
      float: none;
      margin: 0 auto;
    }
    .uagb-cta__content-stacked-tablet
      .uagb-cta__left-right-wrap
      .uagb-cta__content {
      margin-left: 0;
      margin-right: 0;
    }
    .uagb-cta__content-stacked-tablet.uagb-cta__content-right
      .uagb-cta__left-right-wrap
      .uagb-cta__content,
    .uagb-cta__content-stacked-tablet.uagb-cta__content-right
      .uagb-cta__left-right-wrap
      .uagb-cta__link-wrapper {
      width: 100% !important;
    }
  }
  @media screen and (max-width: 767px) {
    .uagb-cta__content-stacked-mobile .uagb-cta__left-right-wrap {
      -ms-flex-direction: column;
      flex-direction: column;
      text-align: center;
    }
    .uagb-cta__content-stacked-mobile.uagb-cta__content-right
      .uagb-cta__button-wrapper {
      display: inline-block;
      float: none;
      margin: 0 auto;
    }
    .uagb-cta__content-stacked-mobile
      .uagb-cta__left-right-wrap
      .uagb-cta__content {
      margin-left: 0;
      margin-right: 0;
    }
    .uagb-cta__content-stacked-mobile.uagb-cta__content-right
      .uagb-cta__left-right-wrap
      .uagb-cta__content,
    .uagb-cta__content-stacked-mobile.uagb-cta__content-right
      .uagb-cta__left-right-wrap
      .uagb-cta__link-wrapper {
      width: 100% !important;
    }
  }
  .uagb-column__wrap {
    position: relative;
    overflow: hidden;
  }
  .uagb-column__wrap .uagb-column__inner-wrap {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 2;
    -ms-flex: 1;
    flex: 1;
  }
  .uagb-column__wrap.uagb-column__align-left .uagb-column__inner-wrap {
    margin-left: 0;
    margin-right: auto;
  }
  .uagb-column__wrap.uagb-column__align-right .uagb-column__inner-wrap {
    margin-left: auto;
    margin-right: 0;
  }
  .uagb-column__wrap .uagb-column__overlay {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
  }
  .uagb-column__wrap .uagb-column__video-wrap {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    overflow: hidden;
    z-index: 0;
    -webkit-transition: opacity 1s;
    -o-transition: opacity 1s;
    transition: opacity 1s;
  }
  .uagb-column__wrap .uagb-column__video-wrap video {
    max-width: 100%;
    width: 100%;
    height: 100%;
    margin: 0;
    line-height: 1;
    border: none;
    display: inline-block;
    vertical-align: baseline;
    -o-object-fit: cover;
    object-fit: cover;
    background-size: cover;
  }
  .wp-block-uagb-columns
    > .editor-inner-blocks
    > .editor-block-list__layout
    > [data-type="uagb/column"] {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex: 1;
    flex: 1;
    padding-left: 0;
    padding-right: 0;
    margin-left: -14px;
    margin-right: -14px;
    min-width: 0;
    word-break: break-word;
    overflow-wrap: break-word;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }
  @media (max-width: 976px) {
    .uagb-column__align-tablet-left .uagb-column__inner-wrap {
      margin-left: 0;
      margin-right: auto;
    }
    .uagb-column__align-tablet-right .uagb-column__inner-wrap {
      margin-left: auto;
      margin-right: 0;
    }
  }
  @media (max-width: 767px) {
    .uagb-column__align-mobile-left .uagb-column__inner-wrap {
      margin-left: 0;
      margin-right: auto;
    }
    .uagb-column__align-mobile-right .uagb-column__inner-wrap {
      margin-left: auto;
      margin-right: 0;
    }
  }
  @media (max-width: 449px) {
    .uagb-columns__wrap.uagb-columns__background-image {
      background-attachment: scroll !important;
    }
  }
  .uagb-columns__wrap {
    position: relative;
  }
  .uagb-columns__wrap .uagb-columns__inner-wrap {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 2;
  }
  .uagb-columns__wrap .uagb-columns__overlay {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
  }
  .uagb-columns__wrap .uagb-columns__video-wrap {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    overflow: hidden;
    z-index: 0;
    -webkit-transition: opacity 1s;
    -o-transition: opacity 1s;
    transition: opacity 1s;
  }
  .uagb-columns__wrap .uagb-columns__video-wrap video {
    max-width: 100%;
    width: 100%;
    height: 100%;
    margin: 0;
    line-height: 1;
    border: none;
    display: inline-block;
    vertical-align: baseline;
    -o-object-fit: cover;
    object-fit: cover;
    background-size: cover;
  }
  .uagb-columns__wrap .uagb-column__wrap {
    display: -ms-flexbox;
    display: flex;
  }
  .uagb-columns__wrap .uagb-columns__shape {
    overflow: hidden;
    position: absolute;
    left: 0;
    width: 100%;
    line-height: 0;
    direction: ltr;
    z-index: 1;
  }
  .uagb-columns__wrap .uagb-columns__shape-top {
    top: -3px;
  }
  .uagb-columns__wrap .uagb-columns__shape-bottom {
    bottom: -3px;
  }
  .uagb-columns__wrap
    .uagb-columns__shape[data-negative="false"].uagb-columns__shape-bottom {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  .uagb-columns__wrap
    .uagb-columns__shape[data-negative="true"].uagb-columns__shape-top {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  .uagb-columns__wrap .uagb-columns__shape.uagb-columns__shape-flip svg {
    -webkit-transform: translateX(-50%) rotateY(180deg);
    transform: translateX(-50%) rotateY(180deg);
  }
  .uagb-columns__wrap .uagb-columns__shape svg {
    display: block;
    width: calc(100% + 1.3px);
    position: relative;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  .uagb-columns__wrap .uagb-columns__shape .uagb-columns__shape-fill {
    fill: #333;
    -webkit-transform-origin: center;
    -ms-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  .uagb-columns__valign-middle .uagb-column__wrap {
    -ms-flex-align: center;
    align-items: center;
  }
  .uagb-columns__valign-top .uagb-column__wrap {
    -ms-flex-align: flex-start;
    align-items: flex-start;
  }
  .uagb-columns__valign-bottom .uagb-column__wrap {
    -ms-flex-align: flex-end;
    align-items: flex-end;
  }
  .uagb-columns__inner-wrap {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
  }
  .uagb-columns__columns-1 > .uagb-column__wrap {
    width: 100%;
  }
  .uagb-columns__columns-2 > .uagb-column__wrap {
    width: 50%;
  }
  .uagb-columns__columns-3 > .uagb-column__wrap {
    width: 33.33%;
  }
  .uagb-columns__columns-4 > .uagb-column__wrap {
    width: 25%;
  }
  .uagb-columns__columns-5 > .uagb-column__wrap {
    width: 20%;
  }
  .uagb-columns__columns-6 > .uagb-column__wrap {
    width: 16.66%;
  }
  .uagb-columns__gap-nogap
    > .wp-block[data-type="uagb/column"]
    .uagb-column__inner-wrap {
    padding: 0;
  }
  .uagb-columns__gap-default
    > .wp-block[data-type="uagb/column"]
    .uagb-column__inner-wrap {
    padding: 10px;
  }
  .uagb-columns__gap-narrow
    > .wp-block[data-type="uagb/column"]
    .uagb-column__inner-wrap {
    padding: 5px;
  }
  .uagb-columns__gap-extended
    > .wp-block[data-type="uagb/column"]
    .uagb-column__inner-wrap {
    padding: 15px;
  }
  .uagb-columns__gap-wide
    > .wp-block[data-type="uagb/column"]
    .uagb-column__inner-wrap {
    padding: 20px;
  }
  .uagb-columns__gap-wider
    > .wp-block[data-type="uagb/column"]
    .uagb-column__inner-wrap {
    padding: 30px;
  }
  @media (max-width: 976px) {
    .uagb-columns__stack-tablet .uagb-columns__columns-1 > .uagb-column__wrap,
    .uagb-columns__stack-tablet .uagb-columns__columns-2 > .uagb-column__wrap,
    .uagb-columns__stack-tablet .uagb-columns__columns-3 > .uagb-column__wrap,
    .uagb-columns__stack-tablet .uagb-columns__columns-4 > .uagb-column__wrap,
    .uagb-columns__stack-tablet .uagb-columns__columns-5 > .uagb-column__wrap,
    .uagb-columns__stack-tablet .uagb-columns__columns-6 > .uagb-column__wrap {
      width: 100% !important;
    }
    .uagb-columns__stack-tablet .uagb-columns__inner-wrap {
      display: block;
    }
    .uagb-columns__reverse-tablet .uagb-columns__inner-wrap {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-direction: column-reverse;
      flex-direction: column-reverse;
    }
  }
  @media (max-width: 767px) {
    .uagb-columns__stack-mobile .uagb-columns__columns-1 > .uagb-column__wrap,
    .uagb-columns__stack-mobile .uagb-columns__columns-2 > .uagb-column__wrap,
    .uagb-columns__stack-mobile .uagb-columns__columns-3 > .uagb-column__wrap,
    .uagb-columns__stack-mobile .uagb-columns__columns-4 > .uagb-column__wrap,
    .uagb-columns__stack-mobile .uagb-columns__columns-5 > .uagb-column__wrap,
    .uagb-columns__stack-mobile .uagb-columns__columns-6 > .uagb-column__wrap {
      width: 100% !important;
    }
    .uagb-columns__stack-mobile .uagb-columns__inner-wrap {
      display: block;
    }
    .uagb-columns__reverse-mobile .uagb-columns__inner-wrap {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-direction: column-reverse;
      flex-direction: column-reverse;
    }
  }
  @media (max-width: 449px) {
    .uagb-columns__wrap .uagb-column__wrap.uagb-column__background-image {
      background-attachment: scroll !important;
    }
  }
  .wp-block-uagb-blockquote {
    padding: 0;
    margin: 0 auto;
  }
  .wp-block-uagb-blockquote .uagb-blockquote__content,
  .wp-block-uagb-blockquote cite.uagb-blockquote__author {
    font-style: normal;
    display: block;
  }
  .wp-block-uagb-blockquote cite.uagb-blockquote__author,
  .wp-block-uagb-blockquote .uagb-blockquote__author {
    -ms-flex-item-align: center;
    align-self: center;
  }
  .wp-block-uagb-blockquote
    .uagb-blockquote__skin-quotation
    blockquote.uagb-blockquote {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
    quotes: none;
    border-left: 0 none;
    border-right: 0 none;
    border-top: 0 none;
    border-bottom: 0 none;
    font-style: normal;
  }
  .wp-block-uagb-blockquote
    .uagb-blockquote__skin-quotation
    .uagb-blockquote__icon-wrap {
    position: relative;
    display: inline-block;
    padding: 0px;
    z-index: 1;
    background: #333;
    padding: 10px;
    border-radius: 100%;
    margin-right: 10px;
  }
  .wp-block-uagb-blockquote
    .uagb-blockquote__skin-quotation
    .uagb-blockquote__icon {
    height: 25px;
    width: 25px;
    display: inline-block;
    float: left;
  }
  .wp-block-uagb-blockquote
    .uagb-blockquote__skin-quotation
    .uagb-blockquote__icon
    svg {
    height: inherit;
    width: inherit;
    display: inherit;
  }
  .wp-block-uagb-blockquote
    .uagb-blockquote__skin-quotation.uagb-blockquote__style-style_2
    .uagb-blockquote__icon-wrap {
    display: inline-block;
    float: left;
  }
  .wp-block-uagb-blockquote blockquote.uagb-blockquote {
    margin: 0;
    padding: 0;
  }
  .wp-block-uagb-blockquote .uagb-blockquote__wrap,
  .wp-block-uagb-blockquote .uagb-blockquote__wrap * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .wp-block-uagb-blockquote
    .uagb-blockquote__style-style_2
    .uagb-blockquote__icon-wrap {
    display: inline-block;
    float: left;
    text-align: left;
  }
  .wp-block-uagb-blockquote .uagb-blockquote__separator-parent {
    display: -ms-flexbox;
    -js-display: flex;
    display: flex;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
  .wp-block-uagb-blockquote
    .uagb-blockquote__with-tweet
    .uagb-blockquote
    footer {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .wp-block-uagb-blockquote .uagb-blockquote a {
    -webkit-box-shadow: none;
    box-shadow: none;
    text-decoration: none;
  }
  .wp-block-uagb-blockquote .uagb-blockquote a.uagb-blockquote__tweet-button {
    display: -ms-flexbox;
    display: flex;
    -webkit-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
    -ms-flex-item-align: end;
    align-self: flex-end;
    line-height: 1;
    position: relative;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    padding: 0;
    color: #1da1f2;
    background-color: transparent;
    -ms-flex-item-align: center;
    align-self: center;
  }
  .wp-block-uagb-blockquote a.uagb-blockquote__tweet-button svg {
    height: 15px;
    width: 15px;
    margin-right: 5px;
    fill: #fff;
    vertical-align: middle;
    -ms-flex-item-align: center;
    align-self: center;
  }
  .wp-block-uagb-blockquote a.uagb-blockquote__tweet-button,
  .wp-block-uagb-blockquote a.uagb-blockquote__tweet-button svg {
    font-style: normal;
  }
  .wp-block-uagb-blockquote
    .uagb-blockquote__tweet-icon
    a.uagb-blockquote__tweet-button
    svg {
    margin-right: 0;
  }
  .wp-block-uagb-blockquote .uagb-blockquote__tweet-icon_text svg {
    margin-right: 10px;
  }
  .wp-block-uagb-blockquote
    .uagb-blockquote__tweet-icon
    a.uagb-blockquote__tweet-button {
    padding: 8px;
  }
  .wp-block-uagb-blockquote
    .uagb-blockquote__tweet-icon_text
    a.uagb-blockquote__tweet-button,
  .wp-block-uagb-blockquote
    .uagb-blockquote__tweet-text
    a.uagb-blockquote__tweet-button {
    padding: 10px 14px;
  }
  .wp-block-uagb-blockquote
    .uagb-blockquote__tweet-style-link
    a.uagb-blockquote__tweet-button {
    padding: 10px 0;
  }
  .wp-block-uagb-blockquote
    .uagb-blockquote__tweet-style-classic
    a.uagb-blockquote__tweet-button,
  .wp-block-uagb-blockquote
    .uagb-blockquote__tweet-style-bubble
    a.uagb-blockquote__tweet-button {
    background-color: #1da1f2;
    border-radius: 100em;
    color: #fff;
  }
  .wp-block-uagb-blockquote
    .uagb-blockquote__tweet-style-bubble
    a.uagb-blockquote__tweet-button:before {
    content: "";
    border: solid 0.5em transparent;
    border-right-color: #1da1f2;
    position: absolute;
    left: -0.8em;
    top: 50%;
    -webkit-transform: translateY(-50%) scale(1, 0.65);
    -ms-transform: translateY(-50%) scale(1, 0.65);
    transform: translateY(-50%) scale(1, 0.65);
    -webkit-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
  }
  .wp-block-uagb-blockquote
    .uagb-blockquote__align-right.uagb-blockquote__tweet-style-bubble
    a.uagb-blockquote__tweet-button:before {
    left: auto;
    right: -0.8em;
    -webkit-transform: translateY(-50%) scale(1, 0.65) rotate(180deg);
    -ms-transform: translateY(-50%) scale(1, 0.65) rotate(180deg);
    transform: translateY(-50%) scale(1, 0.65) rotate(180deg);
  }
  .wp-block-uagb-blockquote
    .uagb-blockquote__align-center.uagb-blockquote__tweet-style-bubble
    a.uagb-blockquote__tweet-button:before {
    left: 50%;
    top: -0.8em;
    right: auto;
    -webkit-transform: translateX(-50%) scale(1, 0.85) rotate(90deg);
    -ms-transform: translateX(-50%) scale(1, 0.85) rotate(90deg);
    transform: translate(-50%, 10%) scale(1, 0.85) rotate(90deg);
  }
  .wp-block-uagb-blockquote
    .uagb-blockquote__with-tweet.uagb-blockquote__align-center
    .uagb-blockquote
    footer,
  .wp-block-uagb-blockquote
    .uagb-blockquote__align-center
    .uagb-blockquote
    footer {
    display: block;
    text-align: center;
  }
  .wp-block-uagb-blockquote
    .uagb-blockquote__align-center
    a.uagb-blockquote__tweet-button {
    display: block;
    text-align: center;
    margin: 0 auto;
    -ms-flex-item-align: center;
    align-self: center;
  }
  .wp-block-uagb-blockquote
    .uagb-blockquote__with-tweet.uagb-blockquote__align-right
    .uagb-blockquote
    footer,
  .wp-block-uagb-blockquote
    .uagb-blockquote__align-right
    .uagb-blockquote
    footer {
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }
  .wp-block-uagb-blockquote .uagb-blockquote__author-image {
    -ms-flex-item-align: center;
    align-self: center;
  }
  .wp-block-uagb-blockquote .uagb-blockquote__author-image img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin-right: 10px;
  }
  .wp-block-uagb-blockquote .uagb-blockquote__author-wrap {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
  }
  .wp-block-uagb-blockquote
    .uagb-blockquote__align-right
    .uagb-blockquote__author-wrap,
  .wp-block-uagb-blockquote
    .uagb-blockquote__align-left
    .uagb-blockquote__author-wrap.uagb-blockquote__author-at-right {
    justify-content: flex-end;
    -webkit-box-pack: flex-end;
    -ms-flex-pack: flex-end;
    -webkit-justify-content: flex-end;
    -moz-box-pack: flex-end;
  }
  .wp-block-uagb-blockquote
    .uagb-blockquote__align-left
    .uagb-blockquote__author-wrap,
  .wp-block-uagb-blockquote
    .uagb-blockquote__align-right
    .uagb-blockquote__author-wrap.uagb-blockquote__author-at-right {
    justify-content: flex-start;
    -webkit-box-pack: flex-start;
    -ms-flex-pack: flex-start;
    -webkit-justify-content: flex-start;
    -moz-box-pack: flex-start;
  }
  .wp-block-uagb-blockquote
    .uagb-blockquote__with-tweet
    .uagb-blockquote__author-wrap {
    justify-content: unset;
    -webkit-box-pack: unset;
    -ms-flex-pack: unset;
    -webkit-justify-content: unset;
    -moz-box-pack: unset;
  }
  .wp-block-uagb-blockquote
    .uagb-blockquote__align-center
    .uagb-blockquote__author-wrap,
  .wp-block-uagb-blockquote
    .uagb-blockquote__align-center.uagb-blockquote__with-tweet
    .uagb-blockquote__author-wrap {
    justify-content: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
  }
  .wp-block-uagb-blockquote
    .uagb-blockquote__author-wrap.uagb-blockquote__author-at-top {
    width: 100%;
  }
  .wp-block-uagb-blockquote
    .uagb-blockquote__author-wrap.uagb-blockquote__author-at-top
    .uagb-blockquote__author-image,
  .wp-block-uagb-blockquote
    .uagb-blockquote__author-wrap.uagb-blockquote__author-at-top
    .uagb-blockquote__author,
  .wp-block-uagb-blockquote
    .uagb-blockquote__author-wrap.uagb-blockquote__author-at-top
    .editor-rich-text {
    width: inherit;
  }
  .wp-block-uagb-blockquote
    .uagb-blockquote__with-tweet
    .uagb-blockquote__author-wrap.uagb-blockquote__author-at-top {
    width: auto;
  }
  .wp-block-uagb-blockquote .uagb-blockquote__author-wrap .editor-rich-text {
    -ms-flex-item-align: center;
    align-self: center;
  }
  .wp-block-uagb-blockquote
    .uagb-blockquote__author-wrap.uagb-blockquote__author-at-right {
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }
  .wp-block-uagb-blockquote
    .uagb-blockquote__align-right
    .uagb-blockquote__author-wrap.uagb-blockquote__author-at-top {
    text-align: right;
  }
  .wp-block-uagb-blockquote
    .uagb-blockquote__author-wrap.uagb-blockquote__author-at-right
    .uagb-blockquote__author-image
    img {
    margin-left: 10px;
    margin-right: 0;
  }
  .wp-block-uagb-blockquote
    .uagb-blockquote__author-wrap.uagb-blockquote__author-at-top {
    -ms-flex-direction: column;
    flex-direction: column;
  }
  @media only screen and (max-width: 976px) {
    .wp-block-uagb-blockquote
      .uagb-blockquote__stack-img-tablet
      .uagb-blockquote__author {
      width: 100%;
    }
    .wp-block-uagb-blockquote
      .uagb-blockquote__stack-img-tablet
      .uagb-blockquote__author-wrap.uagb-blockquote__author-at-right,
    .wp-block-uagb-blockquote
      .uagb-blockquote__stack-img-tablet
      .uagb-blockquote__author-wrap.uagb-blockquote__author-at-left {
      -ms-flex-direction: column;
      flex-direction: column;
    }
    .wp-block-uagb-blockquote
      .uagb-blockquote__stack-img-tablet
      .uagb-blockquote__author-wrap.uagb-blockquote__author-at-right
      .uagb-blockquote__author-image
      img,
    .wp-block-uagb-blockquote
      .uagb-blockquote__stack-img-tablet
      .uagb-blockquote__author-wrap.uagb-blockquote__author-at-left
      .uagb-blockquote__author-image
      img {
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 10px;
    }
    .wp-block-uagb-blockquote
      .uagb-blockquote__stack-img-tablet.uagb-blockquote__with-tweet
      .uagb-blockquote
      footer {
      -ms-flex-direction: column;
      flex-direction: column;
      -ms-flex-item-align: flex-start;
      align-self: flex-start;
    }
    .wp-block-uagb-blockquote
      .uagb-blockquote__stack-img-tablet
      .uagb-blockquote__author-wrap.uagb-blockquote__author-at-left,
    .wp-block-uagb-blockquote
      .uagb-blockquote__stack-img-tablet
      a.uagb-blockquote__tweet-button {
      -ms-flex-item-align: flex-start;
      align-self: flex-start;
    }
    .wp-block-uagb-blockquote
      .uagb-blockquote__stack-img-tablet.uagb-blockquote__align-right.uagb-blockquote__with-tweet
      .uagb-blockquote
      footer,
    .wp-block-uagb-blockquote
      .uagb-blockquote__stack-img-tablet.uagb-blockquote__align-right
      .uagb-blockquote__author-wrap.uagb-blockquote__author-at-left,
    .wp-block-uagb-blockquote
      .uagb-blockquote__stack-img-tablet.uagb-blockquote__align-right
      a.uagb-blockquote__tweet-button {
      -ms-flex-item-align: flex-end;
      align-self: flex-end;
    }
    .wp-block-uagb-blockquote
      .uagb-blockquote__stack-img-tablet
      a.uagb-blockquote__tweet-button {
      margin-top: 10px;
    }
    .wp-block-uagb-blockquote
      .uagb-blockquote__align-right.uagb-blockquote__stack-img-tablet
      .uagb-blockquote__author-image {
      -ms-flex-item-align: flex-end;
      align-self: flex-end;
    }
    .wp-block-uagb-blockquote
      .uagb-blockquote__align-left.uagb-blockquote__stack-img-tablet
      .uagb-blockquote__author-image,
    .wp-block-uagb-blockquote
      .uagb-blockquote__align-left.uagb-blockquote__stack-img-tablet
      .uagb-blockquote__author {
      -ms-flex-item-align: flex-start;
      align-self: flex-start;
    }
    .wp-block-uagb-blockquote
      .uagb-blockquote__stack-img-tablet.uagb-blockquote__align-right.uagb-blockquote__tweet-style-bubble
      a.uagb-blockquote__tweet-button:before,
    .wp-block-uagb-blockquote
      .uagb-blockquote__stack-img-tablet.uagb-blockquote__align-left.uagb-blockquote__tweet-style-bubble
      a.uagb-blockquote__tweet-button:before {
      left: 50%;
      top: -0.8em;
      right: auto;
      -webkit-transform: translateX(-50%) scale(1, 0.85) rotate(90deg);
      -ms-transform: translateX(-50%) scale(1, 0.85) rotate(90deg);
      transform: translate(-50%, 10%) scale(1, 0.85) rotate(90deg);
    }
  }
  @media screen and (max-width: 767px) {
    .wp-block-uagb-blockquote
      .uagb-blockquote__stack-img-mobile
      .uagb-blockquote__author {
      width: 100%;
    }
    .wp-block-uagb-blockquote
      .uagb-blockquote__stack-img-mobile
      .uagb-blockquote__author-wrap.uagb-blockquote__author-at-right,
    .wp-block-uagb-blockquote
      .uagb-blockquote__stack-img-mobile
      .uagb-blockquote__author-wrap.uagb-blockquote__author-at-left {
      -ms-flex-direction: column;
      flex-direction: column;
    }
    .wp-block-uagb-blockquote
      .uagb-blockquote__stack-img-mobile
      .uagb-blockquote__author-wrap.uagb-blockquote__author-at-right
      .uagb-blockquote__author-image
      img,
    .wp-block-uagb-blockquote
      .uagb-blockquote__stack-img-mobile
      .uagb-blockquote__author-wrap.uagb-blockquote__author-at-left
      .uagb-blockquote__author-image
      img {
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 10px;
    }
    .wp-block-uagb-blockquote
      .uagb-blockquote__stack-img-mobile.uagb-blockquote__with-tweet
      .uagb-blockquote
      footer {
      -ms-flex-direction: column;
      flex-direction: column;
      -ms-flex-item-align: flex-start;
      align-self: flex-start;
    }
    .wp-block-uagb-blockquote
      .uagb-blockquote__stack-img-mobile
      .uagb-blockquote__author-wrap.uagb-blockquote__author-at-left,
    .wp-block-uagb-blockquote
      .uagb-blockquote__stack-img-mobile
      a.uagb-blockquote__tweet-button {
      -ms-flex-item-align: flex-start;
      align-self: flex-start;
    }
    .wp-block-uagb-blockquote
      .uagb-blockquote__stack-img-mobile.uagb-blockquote__align-right.uagb-blockquote__with-tweet
      .uagb-blockquote
      footer,
    .wp-block-uagb-blockquote
      .uagb-blockquote__stack-img-mobile.uagb-blockquote__align-right
      .uagb-blockquote__author-wrap.uagb-blockquote__author-at-left,
    .wp-block-uagb-blockquote
      .uagb-blockquote__stack-img-mobile.uagb-blockquote__align-right
      a.uagb-blockquote__tweet-button {
      -ms-flex-item-align: flex-end;
      align-self: flex-end;
    }
    .wp-block-uagb-blockquote
      .uagb-blockquote__stack-img-mobile
      a.uagb-blockquote__tweet-button {
      margin-top: 10px;
    }
    .wp-block-uagb-blockquote
      .uagb-blockquote__align-right.uagb-blockquote__stack-img-mobile
      .uagb-blockquote__author-image {
      -ms-flex-item-align: flex-end;
      align-self: flex-end;
    }
    .wp-block-uagb-blockquote
      .uagb-blockquote__align-left.uagb-blockquote__stack-img-mobile
      .uagb-blockquote__author-image,
    .wp-block-uagb-blockquote
      .uagb-blockquote__align-left.uagb-blockquote__stack-img-tablet
      .uagb-blockquote__author {
      -ms-flex-item-align: flex-start;
      align-self: flex-start;
    }
    .wp-block-uagb-blockquote
      .uagb-blockquote__stack-img-mobile.uagb-blockquote__align-right.uagb-blockquote__tweet-style-bubble
      a.uagb-blockquote__tweet-button:before,
    .wp-block-uagb-blockquote
      .uagb-blockquote__stack-img-mobile.uagb-blockquote__align-left.uagb-blockquote__tweet-style-bubble
      a.uagb-blockquote__tweet-button:before {
      left: 50%;
      top: -0.8em;
      right: auto;
      -webkit-transform: translateX(-50%) scale(1, 0.85) rotate(90deg);
      -ms-transform: translateX(-50%) scale(1, 0.85) rotate(90deg);
      transform: translate(-50%, 10%) scale(1, 0.85) rotate(90deg);
    }
  }
`;
export default shortcodesUltimateStyles;