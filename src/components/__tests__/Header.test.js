import { render } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server"

//The above StaticRouter can run without browser

test("Logo should load on rendering header", () => {
    
    //Load Header
    //providing store cart which is present in Header
    const header = render(
    <StaticRouter>
    <Provider store={store}>
        <Header />
        </Provider>
        </StaticRouter>
    );


    const logo = header.getAllByTestId("logo")
    console.log(logo[0]);

    //we are using logo[0] bcoz it is wrapped inside the array

    expect(logo[0].src).toBe("http://localhost/dummy.png");
    
    //Check if logo is loaded

});

test("Cart should have 0 items on rendering header", () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    );

    const cart = header.getByTestId("cart");

    expect(cart.innerHTML).toBe("Cart- 0 items");

});