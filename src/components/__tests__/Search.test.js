import { render } from "@testing-library/react";
import Body from "../Body";
import store from "../../utils/store";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data";

//We will mock our fetch bcoz jest don't know fetch bcoz fetch is a browser thing which returns a promise
//-So we write something known as global.fetch

//Promise can be resolved or rejected. And we write Promise 2 times bcoz in Body.js we wrote-
//-fetch await 2 times that is why we are writting Promise 2 times.
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            Promise.resolve(RESTAURANT_DATA);
        },
    });
});


test("Search Results on Homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  
  const searchBtn = body.getByTestId("search");

  console.log(searchBtn);


});
