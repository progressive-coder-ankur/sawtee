export const AllCategoriesHandler = {
  name: "allCategories",
  priority: 10,
  pattern: "all-categories",
  func: async ({ route, params, state, libraries }) => {
    const { api } = libraries.source;

    // 1. fetch the data you want from the endpoint page
    const response = await api.get({
      endpoint: "categories",
      params: {
        per_page: 100, // To make sure you get all of them
      },
    });

    // 2. get an array with each item in json format
    const results = await response.json();
    const items = results.sort((a, b) => a.id - b.id);
    // 3. add data to source
    const currentPageData = state.source.data[route];

    Object.assign(currentPageData, {
      items,
    });
  },
};

export const EventsHandler = {
  name: "events",
  priority: 10,
  pattern: "/events",
  func: async ({ route, params, state, libraries }) => {
    const { api } = libraries.source;

    // 1. fetch the data you want from the endpoint page
    const response = await api.get({
      endpoint: "featured-events",
      params: {
        _embed: true,
        orderBy: "id",
        order: "desc",
        // offset: 1,
        per_page: 6, // To make sure you get all of them
      },
    });

    // 2. get an array with each item in json format
    const items = await response.json();
    // 3. add data to source
    const currentPageData = state.source.data[route];

    Object.assign(currentPageData, {
      isReady: true,
      items,
    });
  },
};

export const MenuHandler = {
  name: "menus",
  priority: 10,
  pattern: "/menu/:slug",
  func: async ({ link, params, state, libraries }) => {
    const { slug } = params;

    // Fetch the menu data from the endpoint
    const response = await libraries.source.api.get({
      endpoint: `/menus/v1/menus/${slug}`,
    });

    // Parse the JSON to get the object
    const menuData = await response.json();

    // Add the menu items to source.data
    const menu = state.source.data[link];
    Object.assign(menu, {
      items: menuData.items,
      experts: menuData.acf?.experts,
      isMenu: true,
    });
  },
};

export const NewsHandler = {
  name: "news",
  priority: 10,
  pattern: "/news",
  func: async ({ route, params, state, libraries }) => {
    const { api } = libraries.source;

    // 1. fetch the data you want from the endpoint page
    const response = await api.get({
      endpoint: "sawtee-in-media",
      params: {
        _embed: true,
        orderBy: "menu_order",
        order: "desc",
        per_page: 10, // To make sure you get all of them
      },
    });

    // 2. get an array with each item in json format
    const items = await response.json();
    // 3. add data to source
    const currentPageData = state.source.data[route];

    Object.assign(currentPageData, {
      isReady: true,
      items,
    });
  },
};

export const ProgramsHandler = {
  name: "programs",
  priority: 10,
  pattern: "/programme",
  func: async ({ route, params, state, libraries }) => {
    const { api } = libraries.source;

    // 1. fetch the data you want from the endpoint page
    const response = await api.get({
      endpoint: "programme",
      params: {
        _embed: true,
        orderBy: "id",
        order: "desc",
        // offset: 1,
        per_page: 10, // To make sure you get all of them
      },
    });

    // 2. get an array with each item in json format
    const items = await response.json();
    // 3. add data to source
    const currentPageData = state.source.data[route];

    Object.assign(currentPageData, {
      isReady: true,
      items,
    });
  },
};

export const PublicationArchiveHandler = {
  pattern: "/publications/:slug",
  func: async ({ route, params, state, libraries }) => {
    // Get the page of the current route.
    const { page } = libraries.source.parse(route);

    const categoryidResponse = await libraries.source.api.get({
      endpoint: "categories",
      params: { slug: params.slug },
    });

    const [categoryID] = await libraries.source.populate({
      state,
      response: categoryidResponse,
    });

    // Get the posts from those categories.
    const postsResponse = await libraries.source.api.get({
      endpoint: "publications",
      params: { categories: categoryID.id, page, _embed: true, per_page: 6 },
    });
    const items = await libraries.source.populate({
      state,
      response: postsResponse,
    });

    // Populate state.source.data with the proper info about this URL.
    Object.assign(state.source.data[route], {
      id: categoryID.id,
      items,
    });
  },
};

export const PublicationsHandler = {
  priority: 10,
  pattern: "get-publications",
  func: async ({ route, params, state, libraries }) => {
    const { api } = libraries.source;

    // 1. fetch the data you want from the endpoint page
    const response = await api.get({
      endpoint: "publications",
      params: {
        _embed: true,
        orderBy: "menu_order",
        order: "desc",
        per_page: 60, // To make sure you get all of them
      },
    });

    // 2. get an array with each item in json format
    const items = await response.json();

    // 3. add data to source
    const currentPageData = state.source.data[route];

    Object.assign(currentPageData, {
      items,
    });
  },
};