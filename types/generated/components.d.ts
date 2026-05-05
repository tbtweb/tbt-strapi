import type { Schema, Struct } from '@strapi/strapi';

export interface SharedHighlight extends Struct.ComponentSchema {
  collectionName: 'components_shared_highlights';
  info: {
    displayName: 'highlight';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SharedHotel extends Struct.ComponentSchema {
  collectionName: 'components_shared_hotels';
  info: {
    displayName: 'hotel';
  };
  attributes: {
    name: Schema.Attribute.String;
    starCategory: Schema.Attribute.String;
  };
}

export interface SharedItineraryDay extends Struct.ComponentSchema {
  collectionName: 'components_shared_itinerary_days';
  info: {
    displayName: 'itinerary-day';
  };
  attributes: {
    day: Schema.Attribute.String;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    title: Schema.Attribute.String;
  };
}

export interface SharedPricing extends Struct.ComponentSchema {
  collectionName: 'components_shared_pricings';
  info: {
    displayName: 'pricing';
  };
  attributes: {
    actualPricePerAdult: Schema.Attribute.BigInteger;
    pricePerAdult: Schema.Attribute.BigInteger;
    title: Schema.Attribute.String;
    totalPrice: Schema.Attribute.BigInteger;
  };
}

export interface SharedRatings extends Struct.ComponentSchema {
  collectionName: 'components_shared_ratings';
  info: {
    displayName: 'ratings';
  };
  attributes: {
    start: Schema.Attribute.Integer;
    totalRatings: Schema.Attribute.BigInteger;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.highlight': SharedHighlight;
      'shared.hotel': SharedHotel;
      'shared.itinerary-day': SharedItineraryDay;
      'shared.pricing': SharedPricing;
      'shared.ratings': SharedRatings;
    }
  }
}
