import { Page } from "Components/Page/Page";
import { CartPage } from "Pages/CartPage";
import { ContactsPage } from "Pages/ContactsPage/ContactsPage";
import { MainPage } from "Pages/MainPage/MainPage";
import { MadeInAlfaPage } from "Pages/MadeInAlfa/MadeInAlfaPage";
import { YourDesignPage } from "Pages/YourDesignPage/YourDesignPage";
import { Route, Routes } from "react-router-dom";
import { ProductCardPage } from "Pages/ProductCardPage/ProductCardPage";

import "./App.css";

function App() {
	return (
		<div data-testid="app">
			<Routes>
				<Route path="/" element={<Page children />}>
					<Route index element={<MainPage />}></Route>
					<Route
						path="made-in-alfa"
						element={<MadeInAlfaPage />}
					></Route>
					<Route
						path="your-design"
						element={<YourDesignPage />}
					></Route>
					<Route path="contacts" element={<ContactsPage />}></Route>
					<Route path="productCard" element={<ProductCardPage />}>
						<Route path=":id" element={<ProductCardPage />} />
					</Route>
				</Route>
				<Route path="cart" element={<CartPage />}></Route>
			</Routes>
		</div>
	);
}

export default App;
