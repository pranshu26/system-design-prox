import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function DatabaseFundamentalsPage() {
  return (
    <div className="container py-10">
      <div className="mb-6">
        <Link href="/learn">
          <Button variant="outline" size="sm">
            ← Back to Learning Paths
          </Button>
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-6">Database Fundamentals</h1>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          Databases are organized collections of data stored and accessed electronically. They are essential components
          in most software systems, providing structured storage and retrieval of information.
        </p>

        <div className="my-8 flex justify-center">
          <Image
            src="/placeholder.svg?height=400&width=600&query=Types+of+Databases+Diagram"
            alt="Types of Databases"
            width={600}
            height={400}
            className="rounded-lg border"
          />
        </div>

        <h2>Types of Databases</h2>

        <h3>Relational Databases (SQL)</h3>
        <p>
          Relational databases store data in tables with predefined relationships. They use SQL (Structured Query
          Language) for defining and manipulating the data.
        </p>
        <p>Examples: MySQL, PostgreSQL, Oracle, SQL Server</p>
        <p>Best for: Structured data with clear relationships, ACID transactions</p>

        <h3>NoSQL Databases</h3>
        <p>
          NoSQL databases provide flexible schemas for unstructured data. They are designed for specific data models and
          have flexible schemas for building modern applications.
        </p>
        <p>Types of NoSQL databases:</p>
        <ul>
          <li>
            <strong>Document databases</strong>: MongoDB, CouchDB
          </li>
          <li>
            <strong>Key-value stores</strong>: Redis, DynamoDB
          </li>
          <li>
            <strong>Wide-column stores</strong>: Cassandra, HBase
          </li>
          <li>
            <strong>Graph databases</strong>: Neo4j, Amazon Neptune
          </li>
        </ul>
        <p>Best for: Large volumes of rapidly changing, unstructured data</p>

        <h2>Key Database Concepts</h2>

        <h3>ACID Properties</h3>
        <p>
          ACID (Atomicity, Consistency, Isolation, Durability) is a set of properties that guarantee database
          transactions are processed reliably.
        </p>

        <h3>CAP Theorem</h3>
        <p>
          The CAP theorem states that a distributed database system can only guarantee two of the following three
          properties simultaneously:
        </p>
        <ul>
          <li>
            <strong>Consistency</strong>: All nodes see the same data at the same time
          </li>
          <li>
            <strong>Availability</strong>: Every request receives a response
          </li>
          <li>
            <strong>Partition tolerance</strong>: The system continues to operate despite network partitions
          </li>
        </ul>

        <h3>Database Indexing</h3>
        <p>
          Indexes improve the speed of data retrieval operations by reducing the number of disk accesses required when a
          query is processed.
        </p>

        <h3>Normalization</h3>
        <p>Normalization is the process of organizing data to reduce redundancy and improve data integrity.</p>

        <h2>Database Selection Considerations</h2>
        <ul>
          <li>Data structure and relationships</li>
          <li>Read vs. write ratio</li>
          <li>Scalability requirements</li>
          <li>Consistency requirements</li>
          <li>Development speed and flexibility</li>
        </ul>
      </div>

      <div className="mt-10 flex justify-between">
        <Link href="/learn/beginner/client-server">
          <Button variant="outline">← Previous: Client-Server Architecture</Button>
        </Link>
        <Link href="/learn/beginner/quiz">
          <Button>Next: Knowledge Check Quiz →</Button>
        </Link>
      </div>
    </div>
  )
}
