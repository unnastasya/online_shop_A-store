import React from "react";
import { Typography } from '@alfalab/core-components/typography';

import "./Footer.css"

export function Footer() {
    return (
        <footer className="footer">
            <Typography.Text tag="div" className="footer_text">ООО "Альфа Фьюче Пипл", 2023</Typography.Text>
        </footer>
    )
}