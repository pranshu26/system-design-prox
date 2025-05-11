"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, Plus, Trash2, Save } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Template definitions
const templates = {
  blank: {
    name: "Blank Canvas",
    components: [],
    connections: [],
  },
  "url-shortener": {
    name: "URL Shortener",
    components: [
      { id: "client", type: "client", x: 100, y: 200, label: "Client" },
      { id: "load-balancer", type: "load-balancer", x: 300, y: 200, label: "Load Balancer" },
      { id: "api-server", type: "server", x: 500, y: 200, label: "API Server" },
      { id: "database", type: "database", x: 700, y: 200, label: "Database" },
      { id: "cache", type: "cache", x: 500, y: 350, label: "Cache" },
    ],
    connections: [
      { id: "conn1", from: "client", to: "load-balancer", label: "HTTP Request" },
      { id: "conn2", from: "load-balancer", to: "api-server", label: "Route Request" },
      { id: "conn3", from: "api-server", to: "database", label: "Store/Retrieve URL" },
      { id: "conn4", from: "api-server", to: "cache", label: "Cache Lookup" },
    ],
  },
  "social-media": {
    name: "Social Media Platform",
    components: [
      { id: "client", type: "client", x: 100, y: 200, label: "Client" },
      { id: "cdn", type: "cdn", x: 300, y: 100, label: "CDN" },
      { id: "load-balancer", type: "load-balancer", x: 300, y: 300, label: "Load Balancer" },
      { id: "api-server", type: "server", x: 500, y: 200, label: "API Server" },
      { id: "user-db", type: "database", x: 700, y: 100, label: "User Database" },
      { id: "post-db", type: "database", x: 700, y: 300, label: "Post Database" },
      { id: "cache", type: "cache", x: 500, y: 350, label: "Cache" },
      { id: "search", type: "search", x: 500, y: 50, label: "Search Service" },
    ],
    connections: [
      { id: "conn1", from: "client", to: "cdn", label: "Static Assets" },
      { id: "conn2", from: "client", to: "load-balancer", label: "API Requests" },
      { id: "conn3", from: "load-balancer", to: "api-server", label: "Route Request" },
      { id: "conn4", from: "api-server", to: "user-db", label: "User Data" },
      { id: "conn5", from: "api-server", to: "post-db", label: "Post Data" },
      { id: "conn6", from: "api-server", to: "cache", label: "Cache Data" },
      { id: "conn7", from: "api-server", to: "search", label: "Search Queries" },
    ],
  },
  "e-commerce": {
    name: "E-Commerce Platform",
    components: [
      { id: "client", type: "client", x: 100, y: 200, label: "Client" },
      { id: "cdn", type: "cdn", x: 300, y: 100, label: "CDN" },
      { id: "load-balancer", type: "load-balancer", x: 300, y: 300, label: "Load Balancer" },
      { id: "web-server", type: "server", x: 500, y: 150, label: "Web Server" },
      { id: "api-server", type: "server", x: 500, y: 250, label: "API Server" },
      { id: "product-db", type: "database", x: 700, y: 100, label: "Product Database" },
      { id: "user-db", type: "database", x: 700, y: 200, label: "User Database" },
      { id: "order-db", type: "database", x: 700, y: 300, label: "Order Database" },
      { id: "payment-service", type: "service", x: 500, y: 350, label: "Payment Service" },
      { id: "cache", type: "cache", x: 500, y: 50, label: "Cache" },
    ],
    connections: [
      { id: "conn1", from: "client", to: "cdn", label: "Static Assets" },
      { id: "conn2", from: "client", to: "load-balancer", label: "HTTP Requests" },
      { id: "conn3", from: "load-balancer", to: "web-server", label: "Web Requests" },
      { id: "conn4", from: "load-balancer", to: "api-server", label: "API Requests" },
      { id: "conn5", from: "web-server", to: "api-server", label: "Internal API" },
      { id: "conn6", from: "api-server", to: "product-db", label: "Product Data" },
      { id: "conn7", from: "api-server", to: "user-db", label: "User Data" },
      { id: "conn8", from: "api-server", to: "order-db", label: "Order Data" },
      { id: "conn9", from: "api-server", to: "payment-service", label: "Process Payment" },
      { id: "conn10", from: "api-server", to: "cache", label: "Cache Data" },
    ],
  },
  "video-streaming": {
    name: "Video Streaming Service",
    components: [
      { id: "client", type: "client", x: 100, y: 200, label: "Client" },
      { id: "cdn", type: "cdn", x: 300, y: 200, label: "CDN" },
      { id: "load-balancer", type: "load-balancer", x: 500, y: 200, label: "Load Balancer" },
      { id: "api-server", type: "server", x: 700, y: 200, label: "API Server" },
      { id: "metadata-db", type: "database", x: 900, y: 100, label: "Metadata DB" },
      { id: "user-db", type: "database", x: 900, y: 300, label: "User DB" },
      { id: "encoding-service", type: "service", x: 700, y: 50, label: "Encoding Service" },
      { id: "storage", type: "storage", x: 700, y: 350, label: "Video Storage" },
      { id: "recommendation", type: "service", x: 500, y: 350, label: "Recommendation" },
      { id: "analytics", type: "service", x: 500, y: 50, label: "Analytics" },
    ],
    connections: [
      { id: "conn1", from: "client", to: "cdn", label: "Video Content" },
      { id: "conn2", from: "client", to: "load-balancer", label: "API Requests" },
      { id: "conn3", from: "load-balancer", to: "api-server", label: "Route Request" },
      { id: "conn4", from: "api-server", to: "metadata-db", label: "Video Metadata" },
      { id: "conn5", from: "api-server", to: "user-db", label: "User Data" },
      { id: "conn6", from: "api-server", to: "storage", label: "Fetch Videos" },
      { id: "conn7", from: "api-server", to: "recommendation", label: "Get Recommendations" },
      { id: "conn8", from: "api-server", to: "analytics", label: "Usage Data" },
      { id: "conn9", from: "encoding-service", to: "storage", label: "Store Encoded Videos" },
    ],
  },
  "chat-application": {
    name: "Real-time Chat Application",
    components: [
      { id: "client", type: "client", x: 100, y: 200, label: "Client" },
      { id: "load-balancer", type: "load-balancer", x: 300, y: 200, label: "Load Balancer" },
      { id: "api-server", type: "server", x: 500, y: 100, label: "API Server" },
      { id: "websocket-server", type: "server", x: 500, y: 300, label: "WebSocket Server" },
      { id: "message-db", type: "database", x: 700, y: 100, label: "Message Database" },
      { id: "user-db", type: "database", x: 700, y: 300, label: "User Database" },
      { id: "redis", type: "cache", x: 500, y: 200, label: "Redis" },
      { id: "notification-service", type: "service", x: 300, y: 350, label: "Notification Service" },
    ],
    connections: [
      { id: "conn1", from: "client", to: "load-balancer", label: "HTTP/WS" },
      { id: "conn2", from: "load-balancer", to: "api-server", label: "HTTP Requests" },
      { id: "conn3", from: "load-balancer", to: "websocket-server", label: "WebSocket" },
      { id: "conn4", from: "api-server", to: "message-db", label: "Store/Fetch Messages" },
      { id: "conn5", from: "api-server", to: "user-db", label: "User Data" },
      { id: "conn6", from: "websocket-server", to: "redis", label: "Pub/Sub" },
      { id: "conn7", from: "websocket-server", to: "message-db", label: "Real-time Messages" },
      { id: "conn8", from: "websocket-server", to: "notification-service", label: "Trigger Notifications" },
    ],
  },
}

// Component type to icon/color mapping
const componentTypes = {
  client: { icon: "🖥️", color: "bg-blue-100 dark:bg-blue-900", label: "Client" },
  server: { icon: "🖧", color: "bg-green-100 dark:bg-green-900", label: "Server" },
  "load-balancer": { icon: "⚖️", color: "bg-purple-100 dark:bg-purple-900", label: "Load Balancer" },
  database: { icon: "💾", color: "bg-yellow-100 dark:bg-yellow-900", label: "Database" },
  cache: { icon: "⚡", color: "bg-orange-100 dark:bg-orange-900", label: "Cache" },
  cdn: { icon: "🌐", color: "bg-indigo-100 dark:bg-indigo-900", label: "CDN" },
  service: { icon: "⚙️", color: "bg-red-100 dark:bg-red-900", label: "Service" },
  storage: { icon: "📦", color: "bg-teal-100 dark:bg-teal-900", label: "Storage" },
  search: { icon: "🔍", color: "bg-pink-100 dark:bg-pink-900", label: "Search" },
}

// Generate a unique ID
const generateId = () => `id-${Math.random().toString(36).substring(2, 9)}`

export default function PlaygroundEditorPage() {
  const searchParams = useSearchParams()
  const templateId = searchParams.get("template") || "blank"

  const [diagram, setDiagram] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSimulating, setIsSimulating] = useState(false)
  const [error, setError] = useState("")
  const [selectedComponent, setSelectedComponent] = useState<any>(null)
  const [selectedConnection, setSelectedConnection] = useState<any>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [connectionStart, setConnectionStart] = useState<any>(null)
  const [connectionEnd, setConnectionEnd] = useState({ x: 0, y: 0 })
  const [scale, setScale] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [newConnectionLabel, setNewConnectionLabel] = useState("")

  const canvasRef = useRef<HTMLDivElement>(null)
  const lastMousePos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Load the template
    try {
      if (templates[templateId as keyof typeof templates]) {
        setDiagram(JSON.parse(JSON.stringify(templates[templateId as keyof typeof templates])))
      } else {
        setDiagram(JSON.parse(JSON.stringify(templates.blank)))
        setError(`Template "${templateId}" not found. Using blank canvas instead.`)
      }
    } catch (err) {
      setError("Failed to load template. Using blank canvas instead.")
      setDiagram(JSON.parse(JSON.stringify(templates.blank)))
    } finally {
      setIsLoading(false)
    }
  }, [templateId])

  const handleSimulate = () => {
    setIsSimulating(!isSimulating)
  }

  const handleReset = () => {
    // Reset to the original template
    setDiagram(JSON.parse(JSON.stringify(templates[templateId as keyof typeof templates] || templates.blank)))
    setSelectedComponent(null)
    setSelectedConnection(null)
    setIsConnecting(false)
    setConnectionStart(null)
    setScale(1)
    setPan({ x: 0, y: 0 })
  }

  const handleComponentDragStart = (e: React.DragEvent, type: string) => {
    e.dataTransfer.setData("componentType", type)
  }

  const handleCanvasDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleCanvasDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const type = e.dataTransfer.getData("componentType")
    if (!type) return

    const rect = canvasRef.current?.getBoundingClientRect()
    if (!rect) return

    // Calculate position relative to canvas, accounting for pan and scale
    const x = (e.clientX - rect.left - pan.x) / scale
    const y = (e.clientY - rect.top - pan.y) / scale

    const newComponent = {
      id: generateId(),
      type,
      x,
      y,
      label: componentTypes[type as keyof typeof componentTypes]?.label || "Component",
    }

    setDiagram((prev: any) => ({
      ...prev,
      components: [...prev.components, newComponent],
    }))

    setSelectedComponent(newComponent)
    setSelectedConnection(null)
  }

  const handleComponentMouseDown = (e: React.MouseEvent, component: any) => {
    e.stopPropagation()

    if (isConnecting) {
      // If we're in connecting mode and clicked on a component, set it as the end point
      if (connectionStart && connectionStart.id !== component.id) {
        const newConnection = {
          id: generateId(),
          from: connectionStart.id,
          to: component.id,
          label: newConnectionLabel || "Connection",
        }

        setDiagram((prev: any) => ({
          ...prev,
          connections: [...prev.connections, newConnection],
        }))

        setIsConnecting(false)
        setConnectionStart(null)
        setNewConnectionLabel("")
        setSelectedConnection(newConnection)
        setSelectedComponent(null)
      }
      return
    }

    setSelectedComponent(component)
    setSelectedConnection(null)
    setIsDragging(true)
    lastMousePos.current = { x: e.clientX, y: e.clientY }
  }

  const handleComponentDoubleClick = (e: React.MouseEvent, component: any) => {
    e.stopPropagation()

    // Start creating a connection from this component
    setIsConnecting(true)
    setConnectionStart(component)
    setConnectionEnd({ x: e.clientX, y: e.clientY })
  }

  const handleConnectionClick = (e: React.MouseEvent, connection: any) => {
    e.stopPropagation()
    setSelectedConnection(connection)
    setSelectedComponent(null)
  }

  const handleCanvasMouseMove = (e: React.MouseEvent) => {
    if (isDragging && selectedComponent) {
      const dx = (e.clientX - lastMousePos.current.x) / scale
      const dy = (e.clientY - lastMousePos.current.y) / scale

      setDiagram((prev: any) => ({
        ...prev,
        components: prev.components.map((c: any) =>
          c.id === selectedComponent.id ? { ...c, x: c.x + dx, y: c.y + dy } : c,
        ),
      }))

      // Update the selected component
      setSelectedComponent((prev: any) => ({ ...prev, x: prev.x + dx, y: prev.y + dy }))

      lastMousePos.current = { x: e.clientX, y: e.clientY }
    } else if (isConnecting && connectionStart) {
      const rect = canvasRef.current?.getBoundingClientRect()
      if (!rect) return

      setConnectionEnd({ x: e.clientX, y: e.clientY })
    }
  }

  const handleCanvasMouseUp = () => {
    setIsDragging(false)
  }

  const handleCanvasClick = () => {
    setSelectedComponent(null)
    setSelectedConnection(null)

    if (isConnecting) {
      setIsConnecting(false)
      setConnectionStart(null)
    }
  }

  const handleDeleteComponent = () => {
    if (!selectedComponent) return

    // Delete the component and any connections to/from it
    setDiagram((prev: any) => ({
      ...prev,
      components: prev.components.filter((c: any) => c.id !== selectedComponent.id),
      connections: prev.connections.filter(
        (conn: any) => conn.from !== selectedComponent.id && conn.to !== selectedComponent.id,
      ),
    }))

    setSelectedComponent(null)
  }

  const handleDeleteConnection = () => {
    if (!selectedConnection) return

    setDiagram((prev: any) => ({
      ...prev,
      connections: prev.connections.filter((conn: any) => conn.id !== selectedConnection.id),
    }))

    setSelectedConnection(null)
  }

  const handleComponentLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLabel = e.target.value

    setDiagram((prev: any) => ({
      ...prev,
      components: prev.components.map((c: any) => (c.id === selectedComponent.id ? { ...c, label: newLabel } : c)),
    }))

    setSelectedComponent((prev: any) => ({ ...prev, label: newLabel }))
  }

  const handleConnectionLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLabel = e.target.value

    setDiagram((prev: any) => ({
      ...prev,
      connections: prev.connections.map((conn: any) =>
        conn.id === selectedConnection.id ? { ...conn, label: newLabel } : conn,
      ),
    }))

    setSelectedConnection((prev: any) => ({ ...prev, label: newLabel }))
  }

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.1, 2))
  }

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.1, 0.5))
  }

  const handleZoomReset = () => {
    setScale(1)
    setPan({ x: 0, y: 0 })
  }

  const handleCanvasMouseDown = (e: React.MouseEvent) => {
    // Only pan if not clicking on a component and not in connecting mode
    if (e.target === canvasRef.current && !isConnecting) {
      setIsDragging(true)
      lastMousePos.current = { x: e.clientX, y: e.clientY }
    }
  }

  const handleCanvasPan = (e: React.MouseEvent) => {
    if (isDragging && e.target === canvasRef.current) {
      const dx = e.clientX - lastMousePos.current.x
      const dy = e.clientY - lastMousePos.current.y

      setPan((prev) => ({ x: prev.x + dx, y: prev.y + dy }))
      lastMousePos.current = { x: e.clientX, y: e.clientY }
    }
  }

  const handleStartConnection = () => {
    if (!selectedComponent) return

    setIsConnecting(true)
    setConnectionStart(selectedComponent)
    // Initialize connection end at component position
    setConnectionEnd({ x: selectedComponent.x, y: selectedComponent.y })
  }

  const handleSaveDiagram = () => {
    try {
      const diagramData = JSON.stringify(diagram)
      localStorage.setItem("savedDiagram", diagramData)
      alert("Diagram saved successfully!")
    } catch (err) {
      console.error("Failed to save diagram:", err)
      alert("Failed to save diagram")
    }
  }

  const handleLoadDiagram = () => {
    try {
      const savedDiagram = localStorage.getItem("savedDiagram")
      if (savedDiagram) {
        setDiagram(JSON.parse(savedDiagram))
        setSelectedComponent(null)
        setSelectedConnection(null)
      } else {
        alert("No saved diagram found")
      }
    } catch (err) {
      console.error("Failed to load diagram:", err)
      alert("Failed to load diagram")
    }
  }

  if (isLoading) {
    return (
      <div className="container py-10 flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-lg">Loading editor...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">{diagram?.name || "System Design Editor"}</h1>
          <p className="text-muted-foreground">Design and simulate your system architecture</p>
        </div>
        <div className="flex gap-2">
          <Button onClick={handleReset} variant="outline">
            Reset
          </Button>
          <Button onClick={handleSimulate} variant={isSimulating ? "default" : "outline"}>
            {isSimulating ? "Stop Simulation" : "Simulate"}
          </Button>
          <Button onClick={handleSaveDiagram} variant="outline">
            <Save className="h-4 w-4 mr-2" />
            Save
          </Button>
          <Button onClick={handleLoadDiagram} variant="outline">
            Load
          </Button>
          <Button asChild>
            <Link href="/playground">Exit Editor</Link>
          </Button>
        </div>
      </div>

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Card className="h-[600px] relative">
            <CardHeader className="border-b">
              <div className="flex justify-between items-center">
                <CardTitle>Canvas</CardTitle>
                <div className="flex gap-2">
                  <Button onClick={handleZoomIn} size="sm" variant="outline">
                    +
                  </Button>
                  <Button onClick={handleZoomReset} size="sm" variant="outline">
                    Reset
                  </Button>
                  <Button onClick={handleZoomOut} size="sm" variant="outline">
                    -
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0 h-[calc(100%-4rem)] bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
              {/* Canvas */}
              <div
                ref={canvasRef}
                className="absolute inset-0 cursor-grab"
                onMouseDown={handleCanvasMouseDown}
                onMouseMove={(e) => {
                  handleCanvasMouseMove(e)
                  handleCanvasPan(e)
                }}
                onMouseUp={handleCanvasMouseUp}
                onClick={handleCanvasClick}
                onDragOver={handleCanvasDragOver}
                onDrop={handleCanvasDrop}
              >
                {/* Transformation container */}
                <div
                  className="absolute origin-top-left"
                  style={{
                    transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {/* Render the diagram components */}
                  {diagram?.components?.map((component: any) => (
                    <div
                      key={component.id}
                      className={`absolute p-3 rounded-lg border shadow-sm ${
                        selectedComponent?.id === component.id ? "ring-2 ring-primary" : ""
                      } ${
                        componentTypes[component.type as keyof typeof componentTypes]?.color ||
                        "bg-gray-100 dark:bg-gray-800"
                      } cursor-move`}
                      style={{
                        left: `${component.x}px`,
                        top: `${component.y}px`,
                        transform: "translate(-50%, -50%)",
                        zIndex: 10,
                      }}
                      onMouseDown={(e) => handleComponentMouseDown(e, component)}
                      onDoubleClick={(e) => handleComponentDoubleClick(e, component)}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xl">
                          {componentTypes[component.type as keyof typeof componentTypes]?.icon || "🔹"}
                        </span>
                        <span className="font-medium">{component.label}</span>
                      </div>
                    </div>
                  ))}

                  {/* Render the connections */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    {diagram?.connections?.map((connection: any, index: number) => {
                      // Find the source and target components
                      const source = diagram.components.find((c: any) => c.id === connection.from)
                      const target = diagram.components.find((c: any) => c.id === connection.to)

                      if (!source || !target) return null

                      // Calculate the line coordinates
                      const x1 = source.x
                      const y1 = source.y
                      const x2 = target.x
                      const y2 = target.y

                      // Calculate the midpoint for the label
                      const midX = (x1 + x2) / 2
                      const midY = (y1 + y2) / 2

                      return (
                        <g
                          key={index}
                          onClick={(e) => handleConnectionClick(e, connection)}
                          className="cursor-pointer"
                          style={{ pointerEvents: "all" }}
                        >
                          <line
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            stroke={
                              selectedConnection?.id === connection.id
                                ? "#3b82f6"
                                : isSimulating
                                  ? "#f97316"
                                  : "#94a3b8"
                            }
                            strokeWidth={selectedConnection?.id === connection.id ? 3 : 2}
                            strokeDasharray={isSimulating ? "5,5" : "none"}
                            className={isSimulating ? "animate-dash" : ""}
                          />
                          <rect
                            x={midX - 50}
                            y={midY - 10}
                            width="100"
                            height="20"
                            fill="white"
                            stroke={selectedConnection?.id === connection.id ? "#3b82f6" : "#94a3b8"}
                            rx="4"
                          />
                          <text
                            x={midX}
                            y={midY}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize={12}
                            fill="currentColor"
                          >
                            {connection.label}
                          </text>
                        </g>
                      )
                    })}

                    {/* Render the connection being created */}
                    {isConnecting && connectionStart && (
                      <line
                        x1={connectionStart.x}
                        y1={connectionStart.y}
                        x2={(connectionEnd.x - pan.x) / scale}
                        y2={(connectionEnd.y - pan.y) / scale}
                        stroke="#3b82f6"
                        strokeWidth={2}
                        strokeDasharray="5,5"
                      />
                    )}
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="h-[600px] overflow-auto">
            <CardHeader className="border-b">
              <CardTitle>Components</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-4">
                {Object.entries(componentTypes).map(([type, { icon, color, label }]) => (
                  <div
                    key={type}
                    className={`p-3 rounded-lg border ${color} cursor-grab hover:opacity-80 transition-opacity`}
                    draggable
                    onDragStart={(e) => handleComponentDragStart(e, type)}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{icon}</span>
                      <span className="font-medium capitalize">{label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-6">
        <Card>
          <CardHeader className="border-b">
            <CardTitle>Properties</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            {selectedComponent ? (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="component-label">Component Label</Label>
                  <Input id="component-label" value={selectedComponent.label} onChange={handleComponentLabelChange} />
                </div>
                <div>
                  <Label>Component Type</Label>
                  <div className="p-2 border rounded-md bg-muted">
                    {componentTypes[selectedComponent.type as keyof typeof componentTypes]?.label ||
                      selectedComponent.type}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button onClick={handleStartConnection} className="flex-1">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Connection
                  </Button>
                  <Button onClick={handleDeleteComponent} variant="destructive" className="flex-1">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </div>
            ) : selectedConnection ? (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="connection-label">Connection Label</Label>
                  <Input
                    id="connection-label"
                    value={selectedConnection.label}
                    onChange={handleConnectionLabelChange}
                  />
                </div>
                <div>
                  <Label>From</Label>
                  <div className="p-2 border rounded-md bg-muted">
                    {diagram.components.find((c: any) => c.id === selectedConnection.from)?.label || "Unknown"}
                  </div>
                </div>
                <div>
                  <Label>To</Label>
                  <div className="p-2 border rounded-md bg-muted">
                    {diagram.components.find((c: any) => c.id === selectedConnection.to)?.label || "Unknown"}
                  </div>
                </div>
                <Button onClick={handleDeleteConnection} variant="destructive" className="w-full">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Connection
                </Button>
              </div>
            ) : isConnecting ? (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="new-connection-label">Connection Label</Label>
                  <Input
                    id="new-connection-label"
                    value={newConnectionLabel}
                    onChange={(e) => setNewConnectionLabel(e.target.value)}
                    placeholder="Enter connection label"
                  />
                </div>
                <div>
                  <Label>From</Label>
                  <div className="p-2 border rounded-md bg-muted">{connectionStart?.label || "Unknown"}</div>
                </div>
                <div>
                  <Label>To</Label>
                  <div className="p-2 border rounded-md bg-muted">Click on a component to connect</div>
                </div>
                <Button
                  onClick={() => {
                    setIsConnecting(false)
                    setConnectionStart(null)
                  }}
                  variant="outline"
                  className="w-full"
                >
                  Cancel
                </Button>
              </div>
            ) : (
              <div>
                <p className="text-muted-foreground">
                  Select a component or connection to edit its properties. Drag components from the panel to add them to
                  the canvas.
                </p>
                <div className="mt-4">
                  <p className="text-sm font-medium">Interactions:</p>
                  <ul className="list-disc pl-5 mt-2 text-sm text-muted-foreground space-y-1">
                    <li>Drag components from the right panel to add them to the canvas</li>
                    <li>Click on a component or connection to select it and edit properties</li>
                    <li>Drag a component to move it</li>
                    <li>Double-click a component to start creating a connection</li>
                    <li>Use the zoom controls to zoom in/out</li>
                    <li>Click and drag on empty canvas to pan</li>
                  </ul>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
