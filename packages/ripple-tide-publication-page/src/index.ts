import mime from 'mime-types'
import {
  landingPageComponentsMapping,
  basicTextIncludes,
  accordionIncludes
} from '@dpc-sdp/ripple-tide-landing-page'
import {
  getDynamicPageComponents,
  getField,
  humanizeFilesize,
  tidePageBaseMapping,
  tidePageBaseIncludes
} from '@dpc-sdp/ripple-tide-api'
import type { RplTideMapping } from '@dpc-sdp/ripple-tide-api/types'

const tidePublicationPageModule: RplTideMapping = {
  component: '@dpc-sdp/ripple-tide-publication-page/component',
  schema: '@dpc-sdp/ripple-tide-publication-page/types',
  mapping: {
    ...tidePageBaseMapping({
      withSidebarContacts: true,
      withSidebarRelatedLinks: true,
      withSidebarSocialShare: true
    }),
    url: 'path.url',
    header: {
      title: 'title',
      summary: 'field_landing_page_intro_text'
    },
    social: {
      networks: ['Facebook', 'Twitter', 'LinkedIn'],
      page: {
        title: 'title',
        url: 'path.url'
      }
    },
    summary: 'field_landing_page_summary',
    breadcrumbs: (src: string) => {
      return {
        items: [
          { label: 'Home', url: '/' },
          {
            label: getField(src, 'publication_navigation_root.meta.title'),
            url: getField(src, 'publication_navigation_root.meta.url')
          },
          { label: getField(src, 'title') }
        ]
      }
    },
    dynamicComponents: async (src: any) => {
      return await getDynamicPageComponents(
        src,
        'field_landing_page_component',
        landingPageComponentsMapping
      )
    },
    // documents: (src: string) =>
    //   getField(src, 'field_node_documents').map((doc: any) => ({
    //     name: doc.name,
    //     url: doc.field_media_file.url || doc.field_media_file.uri,
    //     size: humanizeFilesize(doc.field_media_file.filesize),
    //     extension: mime.extension(doc.field_media_file.filemime),
    //     id: doc.id
    //   })),
    publication: {
      text: 'publication_navigation_root.meta.title',
      url: 'publication_navigation_root.meta.url'
    },
    pagination: {
      prev: {
        text: 'publication_navigation_prev.meta.title',
        url: 'publication_navigation_prev.meta.url',
        description:
          'publication_navigation_prev.meta.field_landing_page_summary'
      },
      next: {
        text: 'publication_navigation_next.meta.title',
        url: 'publication_navigation_next.meta.url',
        description:
          'publication_navigation_next.meta.field_landing_page_summary'
      }
    },
    showLastUpdated: () => true
  },
  includes: [
    ...tidePageBaseIncludes({
      withSidebarContacts: true,
      withSidebarRelatedLinks: true,
      withSidebarSocialShare: true
    }),
    ...basicTextIncludes,
    ...accordionIncludes,
    'field_node_primary_site',
    'field_node_site.field_site_main_menu',
    'field_related_links',
    'field_landing_page_contact.field_paragraph_phones',
    'field_landing_page_contact.field_paragraph_social_media',
    'field_landing_page_component.field_paragraph_media.field_media_image',
    'field_landing_page_component.field_paragraph_topic',
    'field_landing_page_component.field_timeline.field_paragraph_media.field_media_image',
    'field_landing_page_component.field_paragraph_keydates',
    'field_landing_page_component.field_paragraph_media_gallery.field_gallery_media.field_media_image',
    'field_landing_page_component.field_paragraph_items.field_paragraph_reference.field_event_details',
    'field_landing_page_component.field_paragraph_items.field_paragraph_reference.field_topic',
    'field_landing_page_component.field_paragraph_items.field_paragraph_reference.field_featured_image.field_media_image',
    'field_landing_page_component.field_paragraph_items.field_paragraph_keydates',
    'field_landing_page_component.field_paragraph_items.field_paragraph_media.field_media_image',
    'field_landing_page_component.field_complex_image_media.field_media_image',
    'field_landing_page_hero_image.field_media_image'
  ]
}

export default tidePublicationPageModule
