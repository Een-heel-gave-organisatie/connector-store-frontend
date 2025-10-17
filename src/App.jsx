import React, { useState, useMemo } from "react";
import LogoImage from "./assets/logo-store.png";
import { connectors } from "./data.js";
import "./App.css";

function App() {
    const [selectedFilter, setSelectedFilter] = useState("all");

    const filteredConnectors = useMemo(() => {
        if (selectedFilter === "all") {
            return connectors;
        }
        return connectors.filter(connector => connector.type === selectedFilter);
    }, [selectedFilter]);

    const filterOptions = [
        { value: "all", label: "All", count: connectors.length },
        { value: "service", label: "Services", count: connectors.filter(c => c.type === "service").length },
        { value: "utility", label: "Utilities", count: connectors.filter(c => c.type === "utility").length }
    ];

    return (
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="heading-section">
                    <img src={LogoImage} alt="Logo" />
                </div>
                <div className="content-section">
                    <div className="container">
                        <div className="filter-section mb-5">
                            <div className="columns is-centered">
                                <div className="column is-narrow pt-0">
                                    <div className="field is-grouped is-grouped-centered">
                                        {filterOptions.map((option) => (
                                            <div key={option.value} className="control">
                                                <button
                                                    className={`button filter-btn ${selectedFilter === option.value ? 'is-active' : ''}`}
                                                    onClick={() => setSelectedFilter(option.value)}
                                                >
                                                    <span>{option.label}</span>
                                                    <span className="tag is-rounded ml-2 is-small">{option.count}</span>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Cards Section */}
                        <div className="columns is-multiline">
                            {filteredConnectors.map((connector, index) => (
                                <div key={index} className="column is-one-third">
                                    <div className="card">
                                        <div className="card-content">
                                            <div className="media">
                                                <div className="media-left">
                                                    <figure className="image is-48x48 connector-image">
                                                        <img 
                                                            src={connector.imageUrl} 
                                                            alt={connector.name}
                                                        />
                                                    </figure>
                                                </div>
                                                <div className="media-content">
                                                    <p className="title is-4">{connector.name}</p>
                                                    <p className="subtitle is-6 mt-2">
                                                        <span className={`tag ${connector.type === 'service' ? 'is-primary' : 'is-info'}`}>
                                                            {connector.type}
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <p>{connector.description}</p>
                                            </div>
                                        </div>
                                        <footer className="card-footer">
                                            <button 
                                                className="button is-primary card-footer-item"
                                                onClick={() => {
                                                    if (connector.downloadUrl) {
                                                        window.open(connector.downloadUrl, '_self');
                                                    } else {
                                                        alert('Download URL not available');
                                                    }
                                                }}
                                            >
                                                <span className="icon">
                                                    <i className="fas fa-download"></i>
                                                </span>
                                                <span>Download</span>
                                            </button>
                                        </footer>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default App;
