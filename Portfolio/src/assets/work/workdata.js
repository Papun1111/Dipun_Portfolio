// workData.js

export const workData = {
  eVentura: {
    id: "ev-india",
    title: "E-Ventura Electric Scooter Market Entry Strategy in India",
    tableOfContents: [
      { name: "Project Background", anchor: "#project-background" },
      { name: "Executive Summary", anchor: "#executive-summary" },
      {
        name: "Insights Deep-Dive",
        anchor: "#insights-deep-dive",
        subItems: [
          { name: "Market Opportunity", anchor: "#market-opportunity" },
          { name: "Consumer Insights", anchor: "#consumer-insights" },
          { name: "Competitive Landscape", anchor: "#competitive-landscape" },
          { name: "E-Ventura’s Positioning", anchor: "#e-venturas-positioning" },
          { name: "Financial Viability", anchor: "#financial-viability" }
        ]
      },
      { name: "Entry Mode Recommendation", anchor: "#entry-mode-recommendation" },
      { name: "Go-To-Market (GTM) Strategy", anchor: "#go-to-market-gtm-strategy" },
      { name: "Exit Strategy", anchor: "#exit-strategy" },
      {
        name: "Recommendations",
        anchor: "#recommendations",
        subItems: [
          { name: "Product & Battery Strategy", anchor: "#product--battery-strategy" },
          { name: "Pricing & Financing", anchor: "#pricing--financing" },
          { name: "Charging & Infrastructure", anchor: "#charging--infrastructure" },
          { name: "Go-to-Market (GTM) Execution", anchor: "#go-to-market-gtm-execution" },
          { name: "Local Manufacturing & Supply Chain", anchor: "#local-manufacturing--supply-chain" },
          { name: "Brand & Marketing", anchor: "#brand--marketing" },
          { name: "Customer Experience & Retention", anchor: "#customer-experience--retention" }
        ]
      },
      {
        name: "Risk & Exit Planning",
        anchor: "#risk--exit-planning"
      },
      {
        name: "Clarifying Questions, Assumptions, and Caveats",
        anchor: "#clarifying-questions-assumptions-and-caveats",
        subItems: [
          { name: "Questions for Stakeholders", anchor: "#questions-for-stakeholders-prior-to-project-advancement" },
          { name: "Assumptions", anchor: "#assumptions" },
          { name: "Caveats", anchor: "#caveats" }
        ]
      }
    ],
    projectBackground: `
India's electric vehicle (EV) market is expected to grow at a compound annual growth rate (CAGR) of **33.25%** between 2024 and 2032. With two-wheelers constituting over 70% of vehicles in India, E-Ventura aims to capture a significant share of the electric scooter market by leveraging its expertise in sustainable mobility solutions.
    `,
    executiveSummary: `
E-Ventura’s market entry strategy focuses on establishing the company as a major player in India's rapidly expanding electric two-wheeler (E2W) scooter market. Valued at \$950.4M in 2023, the market is projected to reach \$12.6B by 2032 at a CAGR of 33.25%. The strategy addresses key consumer pain points—ranging from charging infrastructure limitations to affordability—while deploying a phased Go-To-Market (GTM) plan (Pre-Launch, Launch, and Post-Launch). The project targets an initial 2% market share with an NPV of ₹183M, an IRR of 33%, and a long-term SOM between 2-7%.
    `,
    insightsDeepDive: {
      marketOpportunity: {
        content: `
- The market is projected to grow from **\$950.4M in 2023** to **\$12.6B by 2032**.
- Expected CAGR: **33.25%**.
- Scooters are anticipated to make up **60-70% of scooter sales by 2030**.
        `,
        image: {
          path: "https://github.com/DipunMohapatra/E-Ventura-Electric-scooter-Market-Entry-Strategy-in-India/raw/976cf768b8203c9f26d2c2b8241aa082d3dd546f/Viz/Market%20Forecast.png",
          caption: "Market Forecast"
        }
      },
      consumerInsights: {
        content: `
- **86%** of buyers are attracted to E2Ws for their lower operational costs.
- Key factors: Affordability, safety, range, battery life, and charging speed.
- Main challenges: Range anxiety and limited charging infrastructure.
        `,
        image: {
          path: "https://github.com/DipunMohapatra/E-Ventura-Electric-scooter-Market-Entry-Strategy-in-India/raw/976cf768b8203c9f26d2c2b8241aa082d3dd546f/Viz/Consumer%20survey.png",
          caption: "Consumer Survey Results"
        }
      },
      competitiveLandscape: {
        content: `
- Leading competitors include Ola (31.1% market share), TVS (27.87%), and Bajaj (19.6%).
- Ola’s offerings include a range of 115 km/charge and an aggressive direct-to-consumer model.
- Opportunity exists in delivering affordable scooters with an 80-120 km range.
        `,
        image: {
          path: "https://github.com/DipunMohapatra/E-Ventura-Electric-scooter-Market-Entry-Strategy-in-India/raw/976cf768b8203c9f26d2c2b8241aa082d3dd546f/Viz/Market%20Sales%20Change%20Oct-Nov.png",
          caption: "Market Share Distribution"
        }
      },
      positioning: {
        content: `
- The TOPSIS analysis ranks the premium product 4th and the mid-range product 8th.
- This analysis underscores E-Ventura’s strong competitive positioning based on pricing and features.
        `,
        image: {
          path: "https://github.com/DipunMohapatra/E-Ventura-Electric-scooter-Market-Entry-Strategy-in-India/raw/976cf768b8203c9f26d2c2b8241aa082d3dd546f/Viz/TOPSIS%20Analysis.png",
          caption: "Product Positioning Analysis"
        }
      },
      financialViability: {
        content: `
- A 2% share of the market yields an NPV of **₹183M**, an IRR of **33%**, and cost recovery within **3.92 years**.
- Achieving a 2-7% market share is essential for long-term profitability.
        `,
        image: {
          path: "https://github.com/DipunMohapatra/E-Ventura-Electric-scooter-Market-Entry-Strategy-in-India/raw/ef557f74a8ba66d439552b407e1d439ee8b23f0a/Viz/Revenue%20vs%20Cost.png",
          caption: "Revenue vs Cost"
        }
      }
    },
    entryModeRecommendation: {
      content: `
A wholly owned subsidiary is recommended to maintain full control over operations and brand positioning.
      `,
      image: {
        path: "https://github.com/DipunMohapatra/E-Ventura-Electric-scooter-Market-Entry-Strategy-in-India/raw/ef557f74a8ba66d439552b407e1d439ee8b23f0a/Viz/Wholly%20owned%20subsidiary.png",
        caption: "Wholly Owned Subsidiary"
      }
    },
    goToMarketStrategy: {
      preLaunch: {
        duration: "4-6 months",
        description: "Conduct pilot programs, run digital campaigns, and build partnerships to generate early interest."
      },
      launch: {
        duration: "3 months",
        description: "Establish flagship stores, a strong dealership network, and direct-to-consumer platforms to drive sales.",
        image: {
          path: "https://github.com/DipunMohapatra/E-Ventura-Electric-scooter-Market-Entry-Strategy-in-India/raw/ef557f74a8ba66d439552b407e1d439ee8b23f0a/Viz/Launch.png",
          caption: "Launch Phase Strategy"
        }
      },
      postLaunch: {
        duration: "6-12 months",
        description: "Expand into Tier-2/3 cities, establish service networks, and introduce subscription models for customer retention.",
        image: {
          path: "https://github.com/DipunMohapatra/E-Ventura-Electric-scooter-Market-Entry-Strategy-in-India/raw/ef557f74a8ba66d439552b407e1d439ee8b23f0a/Viz/Post-Launch.png",
          caption: "Post-Launch Operations"
        }
      }
    },
    exitStrategy: {
      content: `
If the project does not meet its goals within 5 years, consider divestment, partnerships, or a gradual market withdrawal to recover investments.
      `,
      image: {
        path: "https://github.com/DipunMohapatra/E-Ventura-Electric-scooter-Market-Entry-Strategy-in-India/raw/2d146fb196ed445965988fa420b62363317bd75c/Viz/Exit%20strategy.png",
        caption: "Exit Strategy"
      }
    },
    recommendations: {
      productAndBattery: `
- **Edge (Premium):** Fast-charging, IoT features, extended warranty.
- **Flex (Mid-Range):** Competitive pricing with a 90–100 km range and removable batteries (with optional swap stations).
      `,
      pricingAndFinancing: `
- Position the premium model slightly above competitors.
- Offer competitive pricing for the mid-range model.
- Collaborate with local banks/fintech for attractive EMI options and leverage government subsidies.
      `,
      chargingAndInfrastructure: `
- Partner with established charging networks (e.g., Tata Power) in metro areas.
- Provide bundled in-home charger options.
      `,
      goToMarketExecution: `
**Pre-Launch:** Pilot programs and influencer-led digital campaigns.
**Launch:** Open flagship stores and secure dealership agreements.
**Post-Launch:** Expand to Tier-3 cities and introduce battery subscription models.
      `,
      localManufacturing: `
- Localize key components (battery assembly, chassis) to reduce costs and improve margins.
- Maintain partnerships with a few top-tier suppliers for consistent quality.
      `,
      brandAndMarketing: `
- Use local micro-influencers for region-specific campaigns.
- Highlight sustainable, green mobility solutions.
      `,
      customerExperience: `
- Offer extended warranties, annual servicing, and digital scheduling.
- Provide real-time diagnostics and on-demand roadside assistance.
      `
    },
    clarifyingQuestions: {
      questions: [
        "What are the primary goals (e.g., market share, brand positioning) that E-Ventura wants to achieve in India?",
        "Are there budget caps, ROI thresholds, or funding limitations we should be aware of?",
        "Does the company face any constraints related to battery technology, software, or manufacturing capacity?",
        "Have we secured preliminary commitments from banks/fintech firms for competitive EMI options?",
        "What are the projected costs for battery components and key raw materials relative to our pricing targets?"
      ],
      assumptions: [
        "Policy Continuity: Stability of FAME-II and PLI incentives for EV manufacturers.",
        "Economic Growth: Consistent increase in disposable income and mobility demand.",
        "Consumer Trends: Continued shift toward electric mobility due to lower operational costs.",
        "Market Penetration: Achieving 2% SOM in the first year with a long-term target of 2-7%."
      ],
      caveats: [
        "Policy Risks: Changes in government subsidies may impact pricing.",
        "Market Variability: Competition and supply chain issues could affect projections.",
        "Infrastructure Delays: Slow expansion of charging networks might hinder adoption."
      ]
    }
  },
  winterRock: {
    id: "wr-ops",
    title: "Winter Rock Operations Optimisation",
    tableOfContents: [
      { name: "Project Background", anchor: "#1-project-background" },
      { name: "Executive Summary", anchor: "#2-executive-summary" },
      {
        name: "Insights Deep-Dive",
        anchor: "#3-insights-deep-dive",
        subItems: [
          { name: "Investigating Sales Trends", anchor: "#31-investigating-sales-trends" },
          { name: "Forecasting Sales of Year-Round Products", anchor: "#32-forecasting-sales-of-year-round-products" },
          { name: "Distribution Plan", anchor: "#33-distribution-plan" },
          { name: "Supplier Choice Based on MAXIMAX, MAXIMIN, and MINIMAX", anchor: "#34-supplier-choice-based-on-maximax-maximin-and-minimax" },
          { name: "Monte Carlo Simulation to Identify Profit Trends", anchor: "#35-monte-carlo-simulation-to-identify-profit-trends-under-eu-and-us-supplier" }
        ]
      },
      { name: "Final Recommendations", anchor: "#4-final-recommendations" }
    ],
    projectBackground: `
Winter Rock is a leading winter sports retailer in the UK specializing in ski, snow, and climbing equipment. In preparation for the six-month period leading to December 2022, the company aims to optimize operations in response to evolving market dynamics. Key challenges include:
- Analyzing historical sales trends (Jan 2019 to Dec 2022) for capacity planning.
- Forecasting demand for year-round products.
- Minimizing distribution costs from hubs in London and Manchester to the Northwest, East Midlands, and West Midlands.
- Evaluating supplier options for a new low-cost mountain ski product amid demand uncertainty.
    `,
    executiveSummary: `
This report analyzes sales data from January 2019 to December 2022 to identify trends, forecast demand, and optimize operations. It reveals a consistent upward sales trend with strong seasonality (peaks from October to January). Forecasting using SES (with α = 0.55) and Holt-Winters models, combined with a linear programming approach to distribution, have resulted in minimized shipping costs of £99,615. Supplier evaluation via MAXIMAX, MAXIMIN, MINIMAX, and Monte Carlo simulation supports contracting the American supplier.
    `,
    insightsDeepDive: {
      salesTrends: {
        content: `
Aggregate sales data was analyzed using a 12-month centered moving average (CMA-12) and a seasonal matrix:
- **Annual Growth:** Sales increased from £788K to £1.09M.
- **Seasonality:** A strong peak occurs from October to January.
        `,
        images: [
          {
            path: "https://github.com/DipunMohapatra/Winter-Rock-Operations-Optimisation/blob/f68f4a69fcfd46cefc484fcdaa37f05947dc6b4a/Visualisations/Original%20Time%20Series%20%26%20CMA.png",
            caption: "Original Time Series & CMA"
          },
          {
            path: "https://github.com/DipunMohapatra/Winter-Rock-Operations-Optimisation/blob/2beee3c66148aaa7ba3ec0c3c63ed85b360688f3/Visualisations/Annual%20Seasonal%20Profile.png",
            caption: "Annual Seasonal Profile"
          }
        ]
      },
      forecasting: {
        content: `
Simple Exponential Smoothing (SES) with an optimal α of 0.55 was used to forecast year-round product sales. Forecast accuracy was measured using in-sample and out-of-sample error metrics (e.g., MAPE, RMSPE). The SES output also serves as an input for a Holt-Winters model to better capture seasonal trends.
        `,
        images: [
          {
            path: "https://github.com/DipunMohapatra/Winter-Rock-Operations-Optimisation/blob/2beee3c66148aaa7ba3ec0c3c63ed85b360688f3/Visualisations/SES.png",
            caption: "SES Forecast"
          },
          {
            path: "https://github.com/DipunMohapatra/Winter-Rock-Operations-Optimisation/blob/8cdcf6fe2e86581fc105089be3498f2b1b409e04/Visualisations/In-sample%20forecast%20error.png",
            caption: "In-sample Forecast Error"
          },
          {
            path: "https://github.com/DipunMohapatra/Winter-Rock-Operations-Optimisation/blob/8cdcf6fe2e86581fc105089be3498f2b1b409e04/Visualisations/Out-of%20sample%20error.png",
            caption: "Out-of-sample Forecast Error"
          }
        ]
      },
      distributionPlan: {
        content: `
A linear programming model was developed to optimize shipments from two distribution hubs (Manchester and London) to three regions:
- **Decision Variables:** Shipments from Manchester (XME, XMW, XMN) and London (XLE, XLW, XLN)
- **Constraints:** Hub capacities (Manchester ≤ 2,500; London ≤ 3,000) and regional demands (East Midlands = 2,000, West Midlands = 930, Northwest = 2,200)
- **Outcome:** Optimized shipping cost of £99,615.
        `,
        image: {
          path: "https://github.com/DipunMohapatra/Winter-Rock-Operations-Optimisation/blob/2beee3c66148aaa7ba3ec0c3c63ed85b360688f3/Visualisations/Distribution%20Plan.png",
          caption: "Optimized Distribution Plan"
        }
      },
      supplierChoice: {
        content: `
Supplier evaluation was performed using three decision approaches:
- **MAXIMAX:** (Risk-seeking) American supplier offers a maximum profit of £45,000.
- **MAXIMIN:** (Risk-averse) American supplier has a minimum profit of £20,000.
- **MINIMAX Regret:** The opportunity loss is £0 for the American supplier versus £110,000 for the European supplier.
**Conclusion:** Contract the American supplier.
        `,
        image: {
          path: "https://github.com/DipunMohapatra/Winter-Rock-Operations-Optimisation/blob/2beee3c66148aaa7ba3ec0c3c63ed85b360688f3/Visualisations/Supplier%20Choice%20(2).jpg",
          caption: "Supplier Choice Analysis"
        }
      },
      monteCarlo: {
        content: `
A Monte Carlo simulation (1,000 iterations) assumed demand uniformly distributed between 200 and 800 units:
- **European Supplier:** Average loss of £6,688 with high variability (SD: £24,365).
- **American Supplier:** Average profit around £19,710 with lower variability (SD: £8,648).
The simulation further supports contracting the American supplier.
        `,
        images: [
          {
            path: "https://github.com/DipunMohapatra/Winter-Rock-Operations-Optimisation/blob/2beee3c66148aaa7ba3ec0c3c63ed85b360688f3/Visualisations/Profit%20-%20Europe%20Supplier.png",
            caption: "Profit Distribution - Europe Supplier"
          },
          {
            path: "https://github.com/DipunMohapatra/Winter-Rock-Operations-Optimisation/blob/2beee3c66148aaa7ba3ec0c3c63ed85b360688f3/Visualisations/Profit%20-%20USA%20Supplier.png",
            caption: "Profit Distribution - USA Supplier"
          }
        ]
      }
    },
    finalRecommendations: `
- Increase inventory by 10% during the peak months (October–January) based on seasonal trends.
- Continue using SES (α = 0.55) for short-term forecasting and integrate the Holt-Winters model for long-term accuracy.
- Adopt the optimized distribution plan to minimize shipping costs (£99,615).
- Contract the American supplier, as supported by decision analysis and Monte Carlo simulation.
- Invest in agile monitoring systems and advanced analytics to continually refine operations.
    `
  }
};
