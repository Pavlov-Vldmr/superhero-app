import { Container, Box, Button, Typography } from "@mui/material";
import React, { ErrorInfo } from "react";

interface Props {
    children?: React.ReactNode
}

interface State {
    hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error, errorInfo: ErrorInfo) {
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        console.error('Error caught by ErrorBoundary.tsx :', error, errorInfo)
        return { hasError: true };
    }


    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        /* eslint-disable no-console*/
        console.error('Error caught by MyErrorBoundary:', error, errorInfo)
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            // Можно отрендерить запасной UI произвольного вида

            return <Container maxWidth="sm">
                <Box
                    display="flex"
                    justifyContent="center"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '10rem'
                    }}>
                    <Typography color={"white"} fontWeight={'bold'}>Something went wrong</Typography>
                    <Button href="/" size="large"
                        sx={{
                            width: '10rem',
                            color: '#fff',
                            backgroundColor: '#ffffff22',
                            mt: '.5rem'
                        }}>
                        To home page
                    </Button>
                </Box>
            </Container>
        }

        return this.props.children;
    }
}

export default ErrorBoundary