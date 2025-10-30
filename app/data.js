const quizData = [
  {
    id: 1,
    question: "In a GPON system, which wavelengths are typically used for downstream and upstream respectively on a single-fibre bidirectional link?",
    options: ["1490 nm downstream / 1310 nm upstream", "1310 nm downstream / 1490 nm upstream", "1550 nm downstream / 1490 nm upstream", "1490 nm downstream / 1550 nm upstream"],
    correctAnswer: "1490 nm downstream / 1310 nm upstream"
  },
  {
    id: 2,
    question: "Which ITU-T recommendation series defines the architecture for GPON?",
    options: ["G.652 series", "G.984 series", "G.707 series", "G.709 series"],
    correctAnswer: "G.984 series"
  },
  {
    id: 3,
    question: "In an OTN (Optical Transport Network), what is the purpose of the ODU (Optical Data Unit)?",
    options: ["It is the physical fibre cable type", "It is used for client signal mapping and multiplexing", "It defines the wavelength used for DWDM", "It is the connector type for patch-cards"],
    correctAnswer: "It is used for client signal mapping and multiplexing"
  },
  {
    id: 4,
    question: "What is the approximate usable bandwidth of one STM-1 frame in an SDH network?",
    options: ["9.953 Gbps", "155.52 Mbps", "2.488 Gbps", "622.08 Mbps"],
    correctAnswer: "155.52 Mbps"
  },
  {
    id: 5,
    question: "Which multiplexing technique is common to a DWDM system in a long-haul transport network?",
    options: ["Time Division Multiplexing (TDM)", "Space Division Multiplexing (SDM)", "Wavelength Division Multiplexing (WDM)", "Code Division Multiplexing (CDM)"],
    correctAnswer: "Wavelength Division Multiplexing (WDM)"
  },
  {
    id: 6,
    question: "In MPLS (Multiprotocol Label Switching), what does the ‘Label Edge Router’ (LER) do at the network ingress?",
    options: ["It pushes a label onto the packet and forwards based on label", "It swaps the label for another label", "It pops the label and forwards based on IP only", "It only advertises labels but does no forwarding"],
    correctAnswer: "It pushes a label onto the packet and forwards based on label"
  },
  {
    id: 7,
    question: "In a GPON access network, what does the term ‘split ratio’ mean?",
    options: ["The ratio of upstream to downstream bandwidth", "The number of ONTs served by one PON port on the OLT", "The ratio of fibre length to signal strength", "The number of wavelengths used"],
    correctAnswer: "The number of ONTs served by one PON port on the OLT"
  },
  {
    id: 8,
    question: "What is a common test instrument used to locate bends, breaks or splices in single-mode fibre in a FTTH (Fibre To The Home) network?",
    options: ["Spectrum Analyser", "Optical Time Domain Reflectometer (OTDR)", "Network Analyzer", "Digital Multimeter"],
    correctAnswer: "Optical Time Domain Reflectometer (OTDR)"
  },
  {
    id: 9,
    question: "In OTN, the G.709 standard supports which of the following as the main overhead channel for optical management and signalling?",
    options: ["FEC (Forward Error Correction)", "ODU-Xv (Optical Data Unit)", "MS (Management Section) overhead", "OTU-k (Optical Tributary Unit)"],
    correctAnswer: "ODU-Xv (Optical Data Unit)"
  },
  {
    id: 10,
    question: "Which fibre patch-card function is critical in an OLT cabinet in a GPON network?",
    options: ["Converting MPLS label to IP header", "Splitting the optical signal to multiple subscriber lines", "Generating DWDM wavelengths", "Mapping SDH tributaries to OTN frames"],
    correctAnswer: "Splitting the optical signal to multiple subscriber lines"
  },
  {
    id: 11,
    question: "In a DWDM system, what parameter defines the spacing between two optical channels?",
    options: ["Bit rate", "Channel grid spacing", "Optical reach", "Amplifier gain"],
    correctAnswer: "Channel grid spacing"
  },
  {
    id: 12,
    question: "What is the function of an Optical Line Terminal (OLT) in a GPON network?",
    options: ["Acts as the end-user modem", "Provides fibre amplification", "Aggregates and manages multiple ONTs", "Converts electrical signals to microwave signals"],
    correctAnswer: "Aggregates and manages multiple ONTs"
  },
  {
    id: 13,
    question: "In a ZTE OLT, what does PON port power level testing verify?",
    options: ["OLT software stability", "Optical signal transmission and loss budget", "OLT temperature control", "Ethernet throughput"],
    correctAnswer: "Optical signal transmission and loss budget"
  },
  {
    id: 14,
    question: "Which fibre connector type is most commonly used in PTCL’s OLT panels?",
    options: ["RJ45", "SC/APC", "LC/UPC", "BNC"],
    correctAnswer: "SC/APC"
  },
  {
    id: 15,
    question: "In SDH networks, VC-4 represents what payload capacity?",
    options: ["2 Mbps", "34 Mbps", "140 Mbps", "155 Mbps"],
    correctAnswer: "140 Mbps"
  },
  {
    id: 16,
    question: "What does the 'POP site' mean in PTCL’s optical transport terminology?",
    options: ["Point of Power", "Point of Presence", "Packet over Protocol", "Port of Platform"],
    correctAnswer: "Point of Presence"
  },
  {
    id: 17,
    question: "Which parameter defines the light intensity reduction over distance in optical fibre?",
    options: ["Dispersion", "Attenuation", "Refraction", "Reflection"],
    correctAnswer: "Attenuation"
  },
  {
    id: 18,
    question: "In OTN, FEC (Forward Error Correction) provides what benefit?",
    options: ["Increases wavelength count", "Reduces latency", "Improves signal integrity and error performance", "Increases fibre attenuation"],
    correctAnswer: "Improves signal integrity and error performance"
  },
  {
    id: 19,
    question: "In a DWDM system, an EDFA amplifier works on which principle?",
    options: ["Electrical amplification", "Optical gain through doped fibre", "Laser diode injection", "Wavelength conversion"],
    correctAnswer: "Optical gain through doped fibre"
  },
  {
    id: 20,
    question: "What is the typical split ratio used in PTCL’s GPON network?",
    options: ["1:4", "1:8", "1:32 or 1:64", "1:128"],
    correctAnswer: "1:32 or 1:64"
  },
  {
    id: 21,
    question: "In MPLS, what field is used to determine packet forwarding decisions?",
    options: ["IP address", "MAC address", "Label value", "TTL value"],
    correctAnswer: "Label value"
  },
  {
    id: 22,
    question: "What is the function of an Optical Distribution Frame (ODF) in a telecom exchange?",
    options: ["To connect and manage fibre terminations", "To store routers and switches", "To multiplex digital signals", "To provide power backup"],
    correctAnswer: "To connect and manage fibre terminations"
  },
  {
    id: 23,
    question: "In PTCL’s GPON setup, what is the role of ONT (Optical Network Terminal)?",
    options: ["To transmit laser to OLT", "To convert optical signal to electrical for customer use", "To perform wavelength multiplexing", "To amplify fibre signals"],
    correctAnswer: "To convert optical signal to electrical for customer use"
  },
  {
    id: 24,
    question: "Which component in an optical network performs wavelength multiplexing and demultiplexing?",
    options: ["Optical Splitter", "MUX/DEMUX", "Patch Cord", "OLT"],
    correctAnswer: "MUX/DEMUX"
  },
  {
    id: 25,
    question: "What does ‘dispersion’ cause in fibre optic transmission?",
    options: ["Signal amplification", "Signal broadening and distortion", "Reduced bandwidth", "Optical noise reduction"],
    correctAnswer: "Signal broadening and distortion"
  },
  {
    id: 26,
    question: "Which wavelength is typically used for video overlay in a GPON system?",
    options: ["1310 nm", "1490 nm", "1550 nm", "1625 nm"],
    correctAnswer: "1550 nm"
  },
  {
    id: 27,
    question: "Which ZTE OLT series is commonly deployed in PTCL central offices?",
    options: ["ZXA10 C600", "ZXHN F660", "ZXA500", "ZXOLT 400"],
    correctAnswer: "ZXA10 C600"
  },
  {
    id: 28,
    question: "In SDH, the frame repetition rate is:",
    options: ["8000 frames/sec", "125 µs per frame", "1000 frames/sec", "1 frame per second"],
    correctAnswer: "125 µs per frame"
  },
  {
    id: 29,
    question: "In an OTN network, which layer provides client signal adaptation and multiplexing?",
    options: ["ODU layer", "OTU layer", "OPU layer", "FEC layer"],
    correctAnswer: "OPU layer"
  },
  {
    id: 30,
    question: "In a PTCL optical project, what is the function of a patch panel?",
    options: ["To connect optical fibres through connectors", "To monitor OLT traffic", "To terminate electrical cables", "To split Ethernet lines"],
    correctAnswer: "To connect optical fibres through connectors"
  },
  {
    id: 31,
    question: "In an FTTH architecture, which component distributes optical signals from OLT to multiple homes?",
    options: ["Patch panel", "Optical Splitter", "MUX/DEMUX", "ONT"],
    correctAnswer: "Optical Splitter"
  },
  {
    id: 32,
    question: "In MPLS, what is the function of an LSR (Label Switch Router)?",
    options: ["Push and pop labels at the network edge", "Swap labels for forwarding within the core", "Route based on IP address only", "Convert MPLS to OTN"],
    correctAnswer: "Swap labels for forwarding within the core"
  },
  {
    id: 33,
    question: "What is the maximum recommended distance for a single GPON segment in PTCL’s access network?",
    options: ["5 km", "10 km", "20 km", "40 km"],
    correctAnswer: "20 km"
  },
  {
    id: 34,
    question: "In SDH, which layer is responsible for managing synchronization and framing?",
    options: ["Path layer", "Section layer", "Line layer", "Physical layer"],
    correctAnswer: "Section layer"
  },
  {
    id: 35,
    question: "Which ITU standard defines the G.652 single-mode fibre type?",
    options: ["G.652", "G.657", "G.984", "G.709"],
    correctAnswer: "G.652"
  },
  {
    id: 36,
    question: "What is the function of VLAN tagging in an MPLS-based PTCL metro network?",
    options: ["Identify customer traffic for isolation", "Increase fibre speed", "Convert MPLS packets to IP", "Compress data traffic"],
    correctAnswer: "Identify customer traffic for isolation"
  },
  {
    id: 37,
    question: "In DWDM systems, what is the typical channel spacing according to ITU-T G.694.1?",
    options: ["25 GHz", "50 GHz", "75 GHz", "100 GHz"],
    correctAnswer: "50 GHz"
  },
  {
    id: 38,
    question: "In a ZTE OLT, what command set is commonly used for configuration and monitoring?",
    options: ["CLI (Command Line Interface)", "Python API", "HTTP GUI", "RADIUS tool"],
    correctAnswer: "CLI (Command Line Interface)"
  },
  {
    id: 39,
    question: "In OTN, which signal hierarchy supports client payloads like 10G Ethernet?",
    options: ["ODU1", "ODU2", "ODU3", "ODU4"],
    correctAnswer: "ODU2"
  },
  {
    id: 40,
    question: "Which component in an optical network protects against total fibre cut?",
    options: ["Ring protection", "OTDR", "Patch cord", "Attenuator"],
    correctAnswer: "Ring protection"
  },
  {
    id: 41,
    question: "What is the optical loss budget of a standard GPON link in PTCL’s FTTH network?",
    options: ["20 dB", "28 dB", "15 dB", "10 dB"],
    correctAnswer: "28 dB"
  },
  {
    id: 42,
    question: "What is the primary advantage of DWDM over CWDM?",
    options: ["Lower cost", "Higher channel density and longer distance", "Less dispersion", "Simpler maintenance"],
    correctAnswer: "Higher channel density and longer distance"
  },
  {
    id: 43,
    question: "Which layer of the OSI model does MPLS primarily operate between?",
    options: ["Layer 1 and Layer 2", "Layer 2 and Layer 3", "Layer 3 and Layer 4", "Layer 4 and Layer 5"],
    correctAnswer: "Layer 2 and Layer 3"
  },
  {
    id: 44,
    question: "What does 'backbone ring' refer to in PTCL’s transport network?",
    options: ["Primary OTN ring connecting core routers", "Copper ring for voice traffic", "Local access fibre", "DSL aggregation point"],
    correctAnswer: "Primary OTN ring connecting core routers"
  },
  {
    id: 45,
    question: "What is the purpose of an attenuator in an optical network?",
    options: ["Increase signal power", "Reduce optical power to prevent receiver overload", "Test fibre break", "Amplify weak signal"],
    correctAnswer: "Reduce optical power to prevent receiver overload"
  },
  {
    id: 46,
    question: "In PTCL’s SDH network, what does MSP (Multiplex Section Protection) provide?",
    options: ["Backup power", "Automatic switch-over between working and protection paths", "Fibre splicing", "Traffic compression"],
    correctAnswer: "Automatic switch-over between working and protection paths"
  },
  {
    id: 47,
    question: "What tool is typically used for fibre power measurement?",
    options: ["Optical Power Meter", "Network Analyzer", "Multimeter", "OTDR only"],
    correctAnswer: "Optical Power Meter"
  },
  {
    id: 48,
    question: "In OTN, which frame structure defines the digital wrapper concept?",
    options: ["G.984", "G.709", "G.657", "G.826"],
    correctAnswer: "G.709"
  },
  {
    id: 49,
    question: "In MPLS, what is the function of the 'penultimate hop popping' mechanism?",
    options: ["Adds an extra label", "Removes label before reaching the egress LER", "Marks packets for QoS", "Encrypts data packets"],
    correctAnswer: "Removes label before reaching the egress LER"
  },
  {
    id: 50,
    question: "Which tool is commonly used to detect and identify fibre faults during PTCL field maintenance?",
    options: ["Wireshark", "OTDR", "TDR", "Loopback plug"],
    correctAnswer: "OTDR"
  },
   {
    id: 31,
    question: "In optical fiber, what causes chromatic dispersion?",
    options: [
      "Variation of refractive index with wavelength",
      "Core impurities",
      "Fibre bending losses",
      "Connector reflections"
    ],
    correctAnswer: "Variation of refractive index with wavelength"
  },
  {
    id: 32,
    question: "Which type of optical amplifier is most commonly used in DWDM systems?",
    options: [
      "Semiconductor Optical Amplifier (SOA)",
      "Raman Amplifier",
      "Erbium-Doped Fiber Amplifier (EDFA)",
      "Optical Regenerator"
    ],
    correctAnswer: "Erbium-Doped Fiber Amplifier (EDFA)"
  },
  {
    id: 33,
    question: "What is the maximum distance typically supported by GPON without amplification?",
    options: [
      "10 km",
      "20 km",
      "40 km",
      "60 km"
    ],
    correctAnswer: "20 km"
  },
  {
    id: 34,
    question: "In OTN, what does FEC (Forward Error Correction) primarily help with?",
    options: [
      "Increases signal power",
      "Compensates chromatic dispersion",
      "Detects and corrects bit errors",
      "Reduces latency"
    ],
    correctAnswer: "Detects and corrects bit errors"
  },
  {
    id: 35,
    question: "Which layer of the OSI model does MPLS primarily operate on?",
    options: [
      "Layer 2.5",
      "Layer 1",
      "Layer 3",
      "Layer 4"
    ],
    correctAnswer: "Layer 2.5"
  },
  {
    id: 36,
    question: "In SDH, what is the capacity of STM-4?",
    options: [
      "622.08 Mbps",
      "155.52 Mbps",
      "2.488 Gbps",
      "9.953 Gbps"
    ],
    correctAnswer: "622.08 Mbps"
  },
  {
    id: 37,
    question: "What is the function of an ONU in a GPON network?",
    options: [
      "Multiplexes optical signals from multiple users",
      "Converts optical signal to electrical signal at user end",
      "Amplifies optical power in the OLT",
      "Generates upstream wavelengths at OLT"
    ],
    correctAnswer: "Converts optical signal to electrical signal at user end"
  },
  {
    id: 38,
    question: "What is the typical wavelength used for video overlay in GPON?",
    options: [
      "1310 nm",
      "1490 nm",
      "1550 nm",
      "1625 nm"
    ],
    correctAnswer: "1550 nm"
  },
  {
    id: 39,
    question: "What type of cable is used for indoor fiber installations?",
    options: [
      "Loose tube cable",
      "Armored cable",
      "Tight-buffered cable",
      "ADSS cable"
    ],
    correctAnswer: "Tight-buffered cable"
  },
  {
    id: 40,
    question: "In DWDM, what is the typical channel spacing used in modern systems?",
    options: [
      "100 GHz",
      "50 GHz",
      "25 GHz",
      "All of the above depending on design"
    ],
    correctAnswer: "All of the above depending on design"
  },
  {
    id: 41,
    question: "Which ITU-T standard defines the OTN digital wrapper technology?",
    options: [
      "G.694.1",
      "G.709",
      "G.984",
      "G.652"
    ],
    correctAnswer: "G.709"
  },
  {
    id: 42,
    question: "What is the function of a media converter in fiber networks?",
    options: [
      "Convert optical to electrical signals and vice versa",
      "Increase optical power level",
      "Multiplex multiple fibers",
      "Monitor optical losses"
    ],
    correctAnswer: "Convert optical to electrical signals and vice versa"
  },
  {
    id: 43,
    question: "What is the advantage of using single-mode fiber over multimode fiber?",
    options: [
      "Lower cost",
      "Supports longer distance and higher bandwidth",
      "Easier splicing",
      "Larger core size"
    ],
    correctAnswer: "Supports longer distance and higher bandwidth"
  },
  {
    id: 44,
    question: "What is the main disadvantage of mechanical splicing in optical fibers?",
    options: [
      "High signal reflection and loss",
      "Requires expensive fusion equipment",
      "Time-consuming process",
      "Permanent joint"
    ],
    correctAnswer: "High signal reflection and loss"
  },
  {
    id: 45,
    question: "Which of the following represents the correct hierarchy in SDH?",
    options: [
      "STM-1 → STM-4 → STM-16 → STM-64",
      "STM-1 → STM-16 → STM-4 → STM-64",
      "STM-1 → STM-8 → STM-16 → STM-32",
      "STM-1 → STM-8 → STM-32 → STM-128"
    ],
    correctAnswer: "STM-1 → STM-4 → STM-16 → STM-64"
  },
  {
    id: 46,
    question: "In fiber optics, what does ‘Numerical Aperture (NA)’ indicate?",
    options: [
      "The fiber’s light gathering ability",
      "The fiber core diameter",
      "The refractive index difference",
      "The attenuation coefficient"
    ],
    correctAnswer: "The fiber’s light gathering ability"
  },
  {
    id: 47,
    question: "Which device combines multiple optical signals of different wavelengths onto one fiber?",
    options: [
      "Splitter",
      "Multiplexer",
      "Patch panel",
      "Transceiver"
    ],
    correctAnswer: "Multiplexer"
  },
  {
    id: 48,
    question: "In an optical network, what is the function of an optical add-drop multiplexer (OADM)?",
    options: [
      "Amplifies optical power",
      "Adds or removes specific wavelengths from a fiber",
      "Converts optical to electrical signals",
      "Combines multiple ONTs"
    ],
    correctAnswer: "Adds or removes specific wavelengths from a fiber"
  },
  {
    id: 49,
    question: "What is the purpose of a pigtail in a fiber optic setup?",
    options: [
      "Used to connect a fiber to a connector or device",
      "Used for signal amplification",
      "Used as a fiber attenuator",
      "Used to test optical power"
    ],
    correctAnswer: "Used to connect a fiber to a connector or device"
  },
  {
    id: 50,
    question: "In OTN, what is the function of the OTU layer?",
    options: [
      "Performs FEC and optical framing",
      "Handles physical fiber routing",
      "Defines wavelength channels",
      "Performs time-slot multiplexing"
    ],
    correctAnswer: "Performs FEC and optical framing"
  },
  {
    id: 51,
    question: "Which layer of the OSI model is responsible for logical addressing and routing?",
    options: ["Data Link Layer", "Network Layer", "Transport Layer", "Session Layer"],
    correctAnswer: "Network Layer"
  },
  {
    id: 52,
    question: "What is the default subnet mask for a Class C IP address?",
    options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
    correctAnswer: "255.255.255.0"
  },
  {
    id: 53,
    question: "Which protocol is used to translate domain names to IP addresses?",
    options: ["HTTP", "DHCP", "DNS", "FTP"],
    correctAnswer: "DNS"
  },
  {
    id: 54,
    question: "Which device operates at Layer 2 of the OSI model?",
    options: ["Router", "Switch", "Hub", "Firewall"],
    correctAnswer: "Switch"
  },
  {
    id: 55,
    question: "Which protocol provides reliable communication with error checking and flow control?",
    options: ["UDP", "IP", "TCP", "ICMP"],
    correctAnswer: "TCP"
  },
  {
    id: 56,
    question: "What is the main function of a router?",
    options: ["Connects multiple networks", "Connects computers in a LAN", "Amplifies network signals", "Stores MAC addresses"],
    correctAnswer: "Connects multiple networks"
  },
  {
    id: 57,
    question: "What is the maximum number of hosts in a /24 subnet?",
    options: ["256", "254", "255", "253"],
    correctAnswer: "254"
  },
  {
    id: 58,
    question: "Which protocol is used to automatically assign IP addresses to devices?",
    options: ["DNS", "ARP", "DHCP", "ICMP"],
    correctAnswer: "DHCP"
  },
  {
    id: 59,
    question: "Which command is used to test the connectivity between two devices?",
    options: ["ipconfig", "ping", "traceroute", "netstat"],
    correctAnswer: "ping"
  },
  {
    id: 60,
    question: "Which layer of the OSI model ensures data is error-free and in sequence?",
    options: ["Transport Layer", "Data Link Layer", "Application Layer", "Network Layer"],
    correctAnswer: "Transport Layer"
  },
  {
    id: 61,
    question: "What is the purpose of ARP in networking?",
    options: [
      "Maps IP addresses to MAC addresses",
      "Maps MAC addresses to IP addresses",
      "Assigns IP automatically",
      "Encrypts packets"
    ],
    correctAnswer: "Maps IP addresses to MAC addresses"
  },
  {
    id: 62,
    question: "Which type of address is used at the Data Link Layer?",
    options: ["IP address", "MAC address", "Port number", "Domain name"],
    correctAnswer: "MAC address"
  },
  {
    id: 63,
    question: "Which protocol is used for sending emails?",
    options: ["HTTP", "SMTP", "POP3", "IMAP"],
    correctAnswer: "SMTP"
  },
  {
    id: 64,
    question: "What is the function of a VLAN in networking?",
    options: [
      "Separates broadcast domains within a switch",
      "Extends the network range",
      "Encrypts network traffic",
      "Increases bandwidth"
    ],
    correctAnswer: "Separates broadcast domains within a switch"
  },
  {
    id: 65,
    question: "Which layer in the OSI model corresponds to IP addressing?",
    options: ["Transport Layer", "Network Layer", "Data Link Layer", "Physical Layer"],
    correctAnswer: "Network Layer"
  },
  {
    id: 66,
    question: "Which routing protocol uses hop count as its metric?",
    options: ["OSPF", "RIP", "EIGRP", "BGP"],
    correctAnswer: "RIP"
  },
  {
    id: 67,
    question: "Which network device breaks up collision domains?",
    options: ["Switch", "Hub", "Repeater", "Bridge"],
    correctAnswer: "Switch"
  },
  {
    id: 68,
    question: "Which address class provides up to 16 million hosts per network?",
    options: ["Class A", "Class B", "Class C", "Class D"],
    correctAnswer: "Class A"
  },
  {
    id: 69,
    question: "What is the main difference between TCP and UDP?",
    options: [
      "TCP is reliable, UDP is unreliable",
      "TCP is faster, UDP is slower",
      "TCP is connectionless, UDP is connection-oriented",
      "Both are unreliable"
    ],
    correctAnswer: "TCP is reliable, UDP is unreliable"
  },
  {
    id: 70,
    question: "Which layer of the OSI model handles data encryption and compression?",
    options: ["Presentation Layer", "Session Layer", "Transport Layer", "Network Layer"],
    correctAnswer: "Presentation Layer"
  },
  {
    id: 71,
    question: "What is the loopback IP address?",
    options: ["0.0.0.0", "127.0.0.1", "255.255.255.255", "192.168.0.1"],
    correctAnswer: "127.0.0.1"
  },
  {
    id: 72,
    question: "Which command shows active TCP connections in Windows?",
    options: ["ping", "tracert", "netstat", "ipconfig"],
    correctAnswer: "netstat"
  },
  {
    id: 73,
    question: "What is the default port number for HTTPS?",
    options: ["80", "25", "443", "110"],
    correctAnswer: "443"
  },
  {
    id: 74,
    question: "What is the purpose of NAT (Network Address Translation)?",
    options: [
      "Converts private IP addresses to public IP addresses",
      "Encrypts packets",
      "Filters traffic",
      "Assigns MAC addresses"
    ],
    correctAnswer: "Converts private IP addresses to public IP addresses"
  },
  {
    id: 75,
    question: "What is the primary function of ICMP protocol?",
    options: [
      "Provides error reporting and diagnostics",
      "Transfers files between devices",
      "Manages routing tables",
      "Encrypts data"
    ],
    correctAnswer: "Provides error reporting and diagnostics"
  },
  {
    id: 76,
    question: "Which layer of the OSI model provides end-to-end communication?",
    options: ["Transport Layer", "Network Layer", "Data Link Layer", "Session Layer"],
    correctAnswer: "Transport Layer"
  },
  {
    id: 77,
    question: "Which IP version uses 128-bit addressing?",
    options: ["IPv4", "IPv6", "IPX", "ARP"],
    correctAnswer: "IPv6"
  },
  {
    id: 78,
    question: "What type of cable is commonly used in Ethernet LANs?",
    options: ["Coaxial", "Twisted Pair", "Fiber Optic", "Power Cable"],
    correctAnswer: "Twisted Pair"
  },
  {
    id: 79,
    question: "Which protocol is used for file transfer over TCP?",
    options: ["FTP", "TFTP", "HTTP", "ICMP"],
    correctAnswer: "FTP"
  },
  {
    id: 80,
    question: "What is the purpose of subnetting?",
    options: [
      "To divide a large network into smaller networks",
      "To increase the number of hosts",
      "To provide more bandwidth",
      "To enable wireless connectivity"
    ],
    correctAnswer: "To divide a large network into smaller networks"
  },
  {
    id: 81,
    question: "Which command displays the routing table in a Windows system?",
    options: ["ipconfig /all", "route print", "netstat -r", "tracert"],
    correctAnswer: "route print"
  },
  {
    id: 82,
    question: "Which protocol uses port number 22 by default?",
    options: ["FTP", "SSH", "Telnet", "SMTP"],
    correctAnswer: "SSH"
  },
  {
    id: 83,
    question: "What is the main purpose of a default gateway in a network?",
    options: [
      "To connect local devices to external networks",
      "To store DNS records",
      "To assign IP addresses",
      "To filter unwanted packets"
    ],
    correctAnswer: "To connect local devices to external networks"
  },
  {
    id: 84,
    question: "Which type of IP address is not routable on the internet?",
    options: ["Public IP", "Private IP", "Static IP", "Dynamic IP"],
    correctAnswer: "Private IP"
  },
  {
    id: 85,
    question: "In the OSI model, which layer manages session establishment and termination?",
    options: ["Transport Layer", "Session Layer", "Network Layer", "Presentation Layer"],
    correctAnswer: "Session Layer"
  },
  {
    id: 86,
    question: "Which routing protocol uses Dijkstra’s shortest path algorithm?",
    options: ["RIP", "OSPF", "BGP", "EIGRP"],
    correctAnswer: "OSPF"
  },
  {
    id: 87,
    question: "What does the acronym MTU stand for in networking?",
    options: ["Maximum Transmission Unit", "Minimal Transfer Unit", "Main Transport Utility", "Managed Traffic Unit"],
    correctAnswer: "Maximum Transmission Unit"
  },
  {
    id: 88,
    question: "Which wireless standard operates in both 2.4 GHz and 5 GHz frequency bands?",
    options: ["802.11a", "802.11b", "802.11g", "802.11n"],
    correctAnswer: "802.11n"
  },
  {
    id: 89,
    question: "Which of the following protocols is used for remote desktop access?",
    options: ["RDP", "SNMP", "ICMP", "DNS"],
    correctAnswer: "RDP"
  },
  {
    id: 90,
    question: "Which technology allows multiple VLANs to be carried over a single physical link?",
    options: ["Access Mode", "Trunking", "Spanning Tree", "Port Mirroring"],
    correctAnswer: "Trunking"
  },
  {
    id: 91,
    question: "What is the default administrative distance of a static route in Cisco routers?",
    options: ["0", "1", "90", "120"],
    correctAnswer: "1"
  },
  {
    id: 92,
    question: "Which command is used on Linux to display network interface information?",
    options: ["ifconfig", "ping", "ipconfig", "route"],
    correctAnswer: "ifconfig"
  },
  {
    id: 93,
    question: "Which of the following is a link-state routing protocol?",
    options: ["RIP", "BGP", "EIGRP", "OSPF"],
    correctAnswer: "OSPF"
  },
  {
    id: 94,
    question: "Which wireless encryption protocol is considered the most secure?",
    options: ["WEP", "WPA", "WPA2", "WPA3"],
    correctAnswer: "WPA3"
  },
  {
    id: 95,
    question: "Which type of cable is used to connect two similar devices directly without a switch?",
    options: ["Straight-through cable", "Crossover cable", "Fiber cable", "Coaxial cable"],
    correctAnswer: "Crossover cable"
  },
  {
    id: 96,
    question: "What is the primary purpose of the Spanning Tree Protocol (STP)?",
    options: [
      "To prevent network loops in Ethernet networks",
      "To assign IP addresses",
      "To secure VLANs",
      "To encrypt data transmission"
    ],
    correctAnswer: "To prevent network loops in Ethernet networks"
  },
  {
    id: 97,
    question: "Which command traces the path packets take to reach a destination?",
    options: ["ping", "traceroute", "netstat", "route"],
    correctAnswer: "traceroute"
  },
  {
    id: 98,
    question: "Which layer of the OSI model handles framing and MAC addressing?",
    options: ["Data Link Layer", "Network Layer", "Physical Layer", "Session Layer"],
    correctAnswer: "Data Link Layer"
  },
  {
    id: 99,
    question: "Which type of address is used by routers to forward packets?",
    options: ["MAC address", "IP address", "Port number", "Domain name"],
    correctAnswer: "IP address"
  },
  {
    id: 100,
    question: "Which protocol is used by network devices to find the MAC address corresponding to an IP address?",
    options: ["DNS", "ARP", "DHCP", "ICMP"],
    correctAnswer: "ARP"
  }
];
export default quizData;
