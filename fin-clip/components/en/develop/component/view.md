<!--
Source URL: https://super-apps.ai/mop/document/en/develop/component/view.html
Extracted: 2026-01-12T23:13:58.268Z (January 12, 2026)
Title: View Containers | Mini-program Development Help Center_Mini-program FAQ_Mini-program Introduction-FinClip
Description: FinClip Mini-program Development Help Center provides you with detailed mini-program development processes, mini-program introductions, and mini-program platform information to help you solve problems encountered in mini-program development.
-->

# FinClip为企业提供小程序生态圈技术产品,开发者可在 [FinClip小程序开发帮助中心](https://www.finclip.com/mop/document/ "小程序开发帮助中心") 找到相关FinClip小程序指引

# [\#](https://super-apps.ai/mop/document/en/develop/component/view.html\#view-containers) View Containers

## [\#](https://super-apps.ai/mop/document/en/develop/component/view.html\#view-containers-description) View Containers Description

| Component | Description | Minimum Version |
| --- | --- | --- |
| view | View Container | 1.0.0 |
| scroll-view | Scrollable View Area | 1.0.0 |
| web-view | Web-View Container | 1.0.0 |
| swiper | Swiper View Container | 1.0.0 |
| swiper-item | Can only be placed inside swiper Component | 1.0.0 |
| cover-image | Image View Overlaid on Native Component | 2.8.3 |
| cover-view | Text View Overlaid on Native Component | 2roadmap.3 |
| match-media | Media Query Matching Detection Node | 2.9.3 |
| movable-area | Movable Area for movable-view | 2.9.3 |
| movable-view | Movable View Container, Can Be Dragged/Slid Within Page | 2.9.3 |
| page-container | Page Container | 2.11.3 |
| share-element | Shared Element | 2.11.3 |

## [\#](https://super-apps.ai/mop/document/en/develop/component/view.html\#view) view

| Attribute | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| hover-class | string | none | No | Specifies the style class when pressed. When hover-class="none", there is no pressed state effect | 2.11.4 |
| hover-stop-propagation | boolean | false | No | Specifies whether to prevent the pressed state from appearing on ancestor nodes of this node | 2.11.4 |
| hover-start-time | number | 50 | No | Duration (in milliseconds) after pressing before the pressed state appears | 2.11.4 |
| hover-stay-time | number | 400 | No | Duration (in milliseconds) the pressed state remains after releasing the finger | 2.11.4 |

## [\#](https://super-apps.ai/mop/document/en/develop/component/view.html\#scroll-view) scroll-view

| Attribute | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| scroll-x | boolean | false | No | Enable horizontal scrolling | 1.0.0 |
| scroll-y | boolean | false | No | Enable vertical scrolling | 1.0.0 |
| upper-threshold | number/string | 50 | No | Distance from top/left that triggers scrolltoupper event | 1.0.0 |
| lower-threshold | number/string | 50 | No | Distance from bottom/right that triggers scrolltolower event | 1.0.0 |
| scroll-top | number/string |  | No | Set vertical scrollbar position | 1.0.0 |
| scroll-left | number/string |  | No | Set horizontal scrollbar position | 1.0.0 |
| scroll-into-view | string |  | No | Value should be a child element id (id cannot start with a number). Scrolls to the element in the scrollable direction | 1.0.0 |
| refresher-enabled | boolean | false | No | Enable custom pull-to-refresh |  |
| refresher-threshold | number | 45 | No | Set custom pull-to-refresh threshold |  |
| refresher-default-style | string | "black" | No | Set custom pull-to-refresh default style, supports black, white, none. none means not using default style |  |
| refresher-background | string | "#FFF" | No | Set custom pull-to-refresh area background color |  |
| refresher-triggered | boolean | false | No | Set current pull-to-refresh status, true means triggered, false means not triggered |  |
| bindscrolltoupper | eventhandle |  | No | Triggered when scrolling to top/left | 1.0.0 |
| bindscrolltolower | eventhandle |  | No | Triggered when scrolling to bottom/right | 1.0.0 |
| bindscroll | eventhandle |  | No | Triggered during scrolling, event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY} | 1.0.0 |
| bindrefresherpulling | eventhandle |  | No | Custom pull-to-refresh control is being pulled |  |
| bindrefresherrefresh | eventhandle |  | No | Custom pull-to-refresh is triggered |  |
| bindrefresherrestore | eventhandle |  | No | Custom pull-to-refresh is restored |  |
| bindrefresherabort | eventhandle |  | No | Custom pull-to-refresh is aborted |  |
| scroll-with-animation | boolean | false | No | Use animation transition when setting scrollbar position |  |
| enable-back-to-top | boolean | false | No | Scrollbar returns to top when clicking status bar (iOS) or double-clicking title bar (Android), vertical only | Not Supported |
| enable-flex | boolean | false | No | Enable flexbox layout. When enabled, declaring display: flex on current node makes it a flex container affecting child nodes. | Not Supported |
| scroll-anchoring | boolean | false | No | Enable scroll anchoring feature to prevent scroll position jitter during content changes, effective only on iOS. Android可以参考 CSS overflow-anchor property. | Not Supported |
| enhanced | boolean | false | No | Enable scroll-view enhanced features | 2.41.11 iOS only |
| bounces | boolean | false | No | iOS scroll-view boundary bounce control (effective when enhanced is enabled), supported only on iOS 16+ | 2.41.11 iOS only |
| show-scrollbar | boolean | true | No | Scrollbar visibility control (effective when enhanced is enabled) | 2.41.11 iOS only, Android does not display scrollbar |
| paging-enabled | boolean | false | No | Paging swipe effect (effective when enhanced is enabled) | 2.41.11 iOS only |
| fast-deceleration | boolean | false | No | Swipe deceleration rate control (effective when enhanced is enabled) | 2.41.11 iOS only |
| binddragstart | eventhandle |  | No | Drag start event (effective when enhanced is enabled) detail { scrollTop, scrollLeft } | Not Supported |
| binddragging | eventhandle |  | No | Dragging event (effective when enhanced is enabled) detail { scrollTop, scrollLeft } | Not Supported |
| binddragend | eventhandle |  | No | Drag end event (effective when enhanced is enabled) detail { scrollTop, scrollLeft, velocity } | Not Supported |

## [\#](https://super-apps.ai/mop/document/en/develop/component/view.html\#swiper) swiper

| Attribute | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| indicator-dots | boolean | false | No | Whether to display panel indicator dots | 1.0.0 |
| indicator-active-color | color | #000000 | No | Color of the currently selected indicator dot | 1.0.0 |
| autoplay | boolean | false | No | Whether to auto-switch | 1.0.0 |
| current | number | 0 | No | Current slider index | 1.0.0 |
| interval | number | 5000 | No | Auto-switch interval (ms) | 1.0.0 |
| duration | number | 500 | No | Sliding animation duration (ms) | 1.0.0 |
| circular | boolean | false | No | Whether to use circular sliding | 1.0.0 |
| vertical | boolean | false | No | Whether sliding direction is vertical | 1.0.0 |
| indicator-color | color | rgba(0, 0, 0, .3) | No | Indicator dot color | 2.11.4 |
| previous-margin | string | "0px" | No | Front margin, can expose a small part of previous item, accepts px and rpx values | 3.0.0 |
| next-margin | string | "0px" | No | Rear margin, can expose a small part of next item, accepts px and rpx values | 3.0.0 |
| snap-to-edge | boolean | false | No | When swiper-item count >=2, circular is false, and previous-margin or next-margin is enabled, specifies if margin applies to first/last element | 3.0.0 |
| display-multiple-items | number | 1 | No | Number of sliders displayed simultaneously | 2.11.4 |
| easing-function | string | "default" | No | Specifies swiper transition easing animation type | 3.0.0 |
| bindchange | eventhandle |  | No | Triggered when current changes, event.detail = {current, source} | 2.11.4 |
| bindtransition | eventhandle |  | No | Triggered when swiper-item position changes, event.detail = {dx: dx, dy: dy} | 2.11.4 |
| bindanimationfinish | eventhandle |  | No | Triggered when animation ends, event.detail same as above | 2.11.4 |

## [\#](https://super-apps.ai/mop/document/en/develop/component/view.html\#swiper-item) swiper-item

| Attribute | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| item-id | string |  | No | Identifier for this swiper-item | 3.0.0 |
| skip-hidden-item-layout | boolean | false | No | Whether to skip layout of hidden sliders. Set true to optimize sliding performance in complex scenarios but lose layout info of hidden sliders | Not Supported |

## [\#](https://super-apps.ai/mop/document/en/develop/component/view.html\#cover-image) cover-image

| Attribute | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| src | string |  | No | Icon path | 1.0.0 |
| bindload | eventhandle |  | No | Triggered when image loads successfully | 2.11.4 |
| binderror | eventhandle |  | No | Triggered when image fails to load | 2.11.4 |

## [\#](https://super-apps.ai/mop/document/en/develop/component/view.html\#cover-view) cover-view

| Attribute | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| scroll-top | number/string |  | No | Set top scroll offset, effective only when overflow-y: scroll is set making it a scrollable element | 2.11.4 |

## [\#](https://super-apps.ai/mop/document/en/develop/component/view.html\#match-media) match-media

| Attribute | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| min-width | number |  | No | Page minimum width (in px) |  |
| max-width | number |  | No | Page maximum width (in px) |  |
| width | number |  | No | Page width (in px) |  |
| min-height | number |  | No | Page minimum height (in px) |  |
| max-height | number |  | No | Page maximum height (in px) |  |
| height | number |  | No | Page height (in px) |  |
| orientation | string |  | No | Screen orientation (landscape or portrait) |  |

## [\#](https://super-apps.ai/mop/document/en/develop/component/view.html\#movable-area) movable-area

| Attribute | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| scale-area | Boolean | false | No | When inner movable-view supports two-finger scaling, setting this modifies the scaling gesture effective area to the entire movable-area | 2.11.4 |

## [\#](https://super-apps.ai/mop/document/en/develop/component/view.html\#movable-view) movable-view

| Attribute | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| direction | string | none | No | Movable-view movement direction, values: all, vertical, horizontal, none | 2.11.4 |
| inertia | boolean | false | No | Whether movable-view has inertia | 2.11.4 |
| out-of-bounds | boolean | false | No | Whether movable-view can move beyond the movable area | 2.11.4 |
| x | number |  | No | Defines x-axis offset. If x is outside movable range, automatically moves to range; changing x triggers animation | 2.11.4 |
| y | number |  | No | Defines y-axis offset. If y is outside movable range, automatically moves to range; changing y triggers animation | 2.11.4 |
| damping | number | 20 | No | Damping coefficient, controls animation when x/y changes and overscroll bounce animation, larger value=faster movement | 2.11.4 |
| friction | number | 2 | No | Friction coefficient, controls inertial sliding animation, larger value=more friction=faster stop; must be >0, otherwise defaults | 1.2.0 |
| disabled | boolean | false | No | Whether disabled |  |
| scale | boolean | false | No | Whether supports two-finger scaling, default scaling gesture area is within movable-view | 2.11.4 |
| scale-min | number | 0.5 | No | Defines minimum scaling factor | 2.11.4 |
| scale-max | number | 10 | No | Defines maximum scaling factor | 2.11.4 |
| scale-value | number | 1 | No | Defines scaling factor, range 0.5-10 | 2.11.4 |
| animation | boolean | true | No | Whether to use animation | 2.11.4 |
| bindchange | eventhandle |  | No | Event triggered during dragging, event.detail = {x, y, source} | 2.11.4 |
| bindscale | eventhandle |  | No | Event triggered during scaling, event.detail = {x, y, scale}, x and y fields supported after 2.1.0 | 2.11.4 |
| htouchmove | eventhandle |  | No | Triggered when initial finger touch moves horizontally. Catching this event means touchmove is also caught | 2.11.4 |
| vtouchmove | eventhandle |  | No | Triggered when initial finger touch moves vertically. Catching this event means touchmove is also caught | 2.11.4 |

## [\#](https://super-apps.ai/mop/document/en/develop/component/view.html\#page-container) page-container

| Attribute | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| show | boolean | false | No | Whether to show container Component | 2.11.3 |
| duration | number | 300 | No | Animation duration (ms) | 2.11.3 |
| z-index | number | 100 | No | z-index level | 2.11.3 |
| overlay | boolean | true | No | Whether to show overlay | 2.11.3 |
| position | string | bottom | No | Popup position, options: top bottom right center | 2.11.3 |
| round | boolean | false | No | Whether to show rounded corners | 2.11.3 |
| close-on-slide-down | boolean | false | No | Whether to close after sliding down a distance | 2.11.3 |
| overlay-style | string |  | No | Custom overlay style | 2.11.3 |
| custom-style | string |  | No | Custom popup layer style | 2.11.3 |
| bind:beforeenter | eventhandle |  | No | Triggered before entering | 2.11.3 |
| bind:enter | eventhandle |  | No | Triggered during entering | 2.11.3 |
| bind:afterenter | eventhandle |  | No | Triggered after entering | 2.11.3 |
| bind:beforeleave | eventhandle |  | No | Triggered before leaving | 2.11.3 |
| bind:leave | eventhandle |  | No | Triggered during leaving | 2.11.3 |
| bind:afterleave | eventhandle |  | No | Triggered after leaving | 2.11.3 |
| bind:clickoverlay | eventhandle |  | No | Triggered when clicking overlay | 2.11.3 |

## [\#](https://super-apps.ai/mop/document/en/develop/component/view.html\#share-element) share-element

| Attribute | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| key | string |  | Yes | Mapping marker | 2.11.3 |
| transform | boolean | false | No | Whether to animate | 2.11.3 |
| duration | number | 300 | No | Animation duration (ms) | 2.11.3 |
| easing-function | string | ease-out | No | CSS easing function | 2.11.3 |

## [\#](https://super-apps.ai/mop/document/en/develop/component/view.html\#root-portal) root-portal

| Attribute | Type | Default Value | Required | Description | Minimum Version |
| --- | --- | --- | --- | --- | --- |
| enable | boolean | true | No | Whether to detach from the page | 3.0.14 |