import { Button } from "@alfalab/core-components/button";
import { Typography } from "@alfalab/core-components/typography";
import { Page } from "Components/Page/Page";
import { Component, ErrorInfo, ReactNode } from "react";

import "./ErrorBoundary.css";

interface Props {
	children?: ReactNode;
}

interface State {
	hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
	public state: State = {
		hasError: false,
	};

	public static getDerivedStateFromError(_: Error): State {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error("Error:", error, errorInfo);
	}

	resetError = () => this.setState({ hasError: false });

	render() {
		if (this.state.hasError) {
			return (
				<Page>
					<div className="error__block">
						<Typography.Title
							tag="h1"
							weight="bold"
							className="error__text"
						>
							{`Упс, что-то пошло не так ;(`}
						</Typography.Title>
						<Button
							view="primary"
							onClick={this.resetError}
							className="error__button"
						>
							Попробовать снова
						</Button>
					</div>
				</Page>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
