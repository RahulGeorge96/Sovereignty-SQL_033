import React, { useEffect, useState } from "react";
import { styles } from "../styles/styles";

const FindAgent = () => {
  const [properties, setProperties] = useState([]);
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    document.title = "Beehome - Find Agent";
    window.scrollTo(0, 0);

    fetch("https://mock-server-app-5gxy.onrender.com/properties")
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
        extractUniqueAgents(data);
      });
  }, []);

  const extractUniqueAgents = (properties) => {
    const agentsMap = new Map();

    properties.forEach((property) => {
      if (!agentsMap.has(property.agentEmail)) {
        agentsMap.set(property.agentEmail, {
          name: property.agentName,
          email: property.agentEmail,
          phone: property.agentPhone,
        });
      }
    });

    setAgents(Array.from(agentsMap.values()));
  };

  return (
    <div className={`${styles.paddingHorizontal} py-6 lg:py-12`}>
      <h1 className="text-3xl font-semibold">Find agent</h1>
      <p className="text-gray-500 mt-4">Beehome's most popular agents.</p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{agent.name}</h2>
            <p className="text-gray-500">{agent.email}</p>
            <p className="mt-2">{agent.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindAgent;
