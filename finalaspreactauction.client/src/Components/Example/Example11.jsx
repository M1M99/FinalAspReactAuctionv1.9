import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { QRCode } from "antd";
import styled from "styled-components";
import {
    Zap,
    Github,
    Twitter,
    Linkedin,
    Copyright,
} from "lucide-react";
import GetCarByMake from "../Fetch/GetCarByMake";

const Footer = () => {
    const [makes, setMakes] = useState([]);
    const [selectedId, setSelectedId] = useState("");

    useEffect(() => {
        const fetchMakes = async () => {
            try {
                const response = await fetch("https://localhost:7038/api/Brand/GetAll");
                const data = await response.json();
                setMakes(data);
            } catch (error) {
                console.error("Error fetching makes:", error);
                setMakes([]);
            }
        };

        fetchMakes();
    }, []);

    return (
        <div className="bg-gray-900 text-white pt-4 pb-2 mt-2">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-10 border-b border-gray-800">
                    <div className="flex items-center space-x-2">
                        <Zap className="h-8 w-8 text-indigo-400" />
                        <span className="text-2xl font-bold">Auction</span>
                    </div>

                    <nav className="flex flex-wrap justify-center gap-6 text-sm">
                        <a href="#features" className="hover:text-indigo-400 transition-colors">Features</a>
                        <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
                        <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
                    </nav>

                    <div className="flex space-x-4">
                        <a href="https://github.com/M1M99" aria-label="GitHub" className="hover:text-indigo-400 transition-colors">
                            <Github className="h-6 w-6" />
                        </a>
                        <a href="#" aria-label="Twitter" className="hover:text-indigo-400 transition-colors">
                            <Twitter className="h-6 w-6" />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="hover:text-indigo-400 transition-colors">
                            <Linkedin className="h-6 w-6" />
                        </a>
                    </div>
                </div>

                {/* Middle Part: Brands List & QR Code */}
                <ContentWrapper>
                    <BrandsList>
                        {makes.map((brand) => (
                            <BrandItem key={brand.id}>
                                <BrandLink
                                    to={`/getCarByBrand/${brand.id}`}
                                    onClick={() => setSelectedId(brand.id)}
                                >
                                    {brand.name}
                                </BrandLink>
                            </BrandItem>
                        ))}
                    </BrandsList>

                    <QRCodeContainer>
                        <QRCode
                            errorLevel="H"
                            value="https://localhost:50007/"
                            icon="https://static.thenounproject.com/png/1025889-200.png"
                        />
                    </QRCodeContainer>
                </ContentWrapper>

                {/* Bottom Text */}
                <div className="text-center text-sm text-gray-400 mt-8 pb-6">
                    <p className="flex justify-center items-center gap-1">
                        <Copyright className="h-4 w-4" />
                        {new Date().getFullYear()} Auction. All rights reserved.
                    </p>
                </div>

                {/* Optional: Display cars by selected brand */}
                {selectedId && <GetCarByMake makeId={selectedId} />}
            </div>
        </div>
    );
};

// Styled Components Section
const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 40px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BrandsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    width: 100%;
  }
`;

const BrandItem = styled.li`
  text-align: center;
`;

const BrandLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.2s;

  &:hover {
    color: #60a5fa; // Tailwind indigo-400
  }
`;

const QRCodeContainer = styled.div`
  .ant-qrcode {
    padding: 10px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export default Footer;
