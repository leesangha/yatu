// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for homepage documents */
interface HomepageDocumentData {
    /**
     * rich field in *homepage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.rich
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    rich: prismicT.RichTextField;
    /**
     * timestamp field in *homepage*
     *
     * - **Field Type**: Timestamp
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.timestamp
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/timestamp
     *
     */
    timestamp: prismicT.TimestampField;
}
/**
 * homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomepageDocumentData>, "homepage", Lang>;
/** Content for Navigation documents */
interface NavigationDocumentData {
    /**
     * logo_image field in *Navigation*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.logo_image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo_image: prismicT.ImageField<never>;
    /**
     * Slice Zone field in *Navigation*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<NavigationDocumentDataSlicesSlice>;
}
/**
 * Slice for *Navigation ??? Slice Zone*
 *
 */
type NavigationDocumentDataSlicesSlice = MenusSlice;
/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<NavigationDocumentData>, "navigation", Lang>;
/** Content for page documents */
interface PageDocumentData {
    /**
     * color field in *page*
     *
     * - **Field Type**: Color
     * - **Placeholder**: *None*
     * - **API ID Path**: page.color
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/color
     *
     */
    color: prismicT.ColorField;
}
/**
 * page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
/** Content for product page documents */
interface ProductPageDocumentData {
    /**
     * bool field in *product page*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: product_page.bool
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    bool: prismicT.BooleanField;
    /**
     * key field in *product page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: product_page.key
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    key: prismicT.KeyTextField;
    /**
     * product_image field in *product page*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: product_page.product_image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    product_image: prismicT.ImageField<never>;
    /**
     * price field in *product page*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: product_page.price
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    price: prismicT.RichTextField;
}
/**
 * product page document from Prismic
 *
 * - **API ID**: `product_page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProductPageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ProductPageDocumentData>, "product_page", Lang>;
export type AllDocumentTypes = HomepageDocument | NavigationDocument | PageDocument | ProductPageDocument;
/**
 * Primary content in Menus ??? Primary
 *
 */
interface MenusSliceDefaultPrimary {
    /**
     * MenuText field in *Menus ??? Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: menus.primary.menutext
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    menutext: prismicT.RichTextField;
    /**
     * route field in *Menus ??? Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: menus.primary.route
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    route: prismicT.KeyTextField;
}
/**
 * Item in Menus ??? Items
 *
 */
export interface MenusSliceDefaultItem {
    /**
     * SubMenuText field in *Menus ??? Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: menus.items[].maintext
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    maintext: prismicT.RichTextField;
    /**
     * link field in *Menus ??? Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: menus.items[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    link: prismicT.KeyTextField;
}
/**
 * Default variation for Menus Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Menus`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MenusSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<MenusSliceDefaultPrimary>, Simplify<MenusSliceDefaultItem>>;
/**
 * Slice variation for *Menus*
 *
 */
type MenusSliceVariation = MenusSliceDefault;
/**
 * Menus Shared Slice
 *
 * - **API ID**: `menus`
 * - **Description**: `Menus`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MenusSlice = prismicT.SharedSlice<"menus", MenusSliceVariation>;
/**
 * Primary content in Textbox ??? Primary
 *
 */
interface TextboxSliceDefaultPrimary {
    /**
     * Title field in *Textbox ??? Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: textbox.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *Textbox ??? Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: textbox.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Default variation for Textbox Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Textbox`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextboxSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TextboxSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Textbox*
 *
 */
type TextboxSliceVariation = TextboxSliceDefault;
/**
 * Textbox Shared Slice
 *
 * - **API ID**: `textbox`
 * - **Description**: `Textbox`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextboxSlice = prismicT.SharedSlice<"textbox", TextboxSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { HomepageDocumentData, HomepageDocument, NavigationDocumentData, NavigationDocumentDataSlicesSlice, NavigationDocument, PageDocumentData, PageDocument, ProductPageDocumentData, ProductPageDocument, AllDocumentTypes, MenusSliceDefaultPrimary, MenusSliceDefaultItem, MenusSliceDefault, MenusSliceVariation, MenusSlice, TextboxSliceDefaultPrimary, TextboxSliceDefault, TextboxSliceVariation, TextboxSlice };
    }
}
