"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, AlertCircle } from "lucide-react"

const questions = [
  {
    id: 1,
    question: "Which of the following best describes client-server architecture?",
    options: [
      "A system where all components run on a single machine",
      "A distributed system where clients request services from servers",
      "A system where databases directly communicate with users",
      "A peer-to-peer network with no central authority",
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "Which of these is NOT a type of NoSQL database?",
    options: ["Document database", "Key-value store", "Relational database", "Graph database"],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: "What does the 'A' in ACID properties stand for?",
    options: ["Availability", "Authentication", "Atomicity", "Authorization"],
    correctAnswer: 2,
  },
  {
    id: 4,
    question:
      "According to the CAP theorem, a distributed database system can guarantee at most how many of the three properties (Consistency, Availability, Partition tolerance)?",
    options: ["One", "Two", "Three", "None"],
    correctAnswer: 1,
  },
  {
    id: 5,
    question: "Which of the following is a key advantage of client-server architecture?",
    options: [
      "No single point of failure",
      "No network connectivity required",
      "Centralized data management",
      "Reduced complexity",
    ],
    correctAnswer: 2,
  },
]

export default function QuizPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleAnswerChange = (questionId: number, answerIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex,
    }))
  }

  const handleSubmit = () => {
    setSubmitted(true)
  }

  const calculateScore = () => {
    let correct = 0
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        correct++
      }
    })
    return correct
  }

  const score = calculateScore()
  const totalQuestions = questions.length

  return (
    <div className="container py-10">
      <div className="mb-6">
        <Link href="/learn">
          <Button variant="outline" size="sm">
            ← Back to Learning Paths
          </Button>
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-6">Beginner Module Quiz</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Test your understanding of the beginner system design concepts
      </p>

      {submitted ? (
        <div className="space-y-6">
          <Alert className={score >= 4 ? "bg-green-500/20" : "bg-amber-500/20"}>
            <div className="flex items-center gap-2">
              {score >= 4 ? <CheckCircle className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
              <AlertTitle>Quiz Results</AlertTitle>
            </div>
            <AlertDescription>
              You scored {score} out of {totalQuestions} ({Math.round((score / totalQuestions) * 100)}%)
              {score >= 4
                ? " - Great job! You have a good understanding of the basics."
                : " - You might want to review the material again."}
            </AlertDescription>
          </Alert>

          {questions.map((q) => (
            <Card
              key={q.id}
              className={answers[q.id] === q.correctAnswer ? "border-green-500/50" : "border-red-500/50"}
            >
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  {answers[q.id] === q.correctAnswer ? (
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-500 mt-1" />
                  )}
                  <div>{q.question}</div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={answers[q.id]?.toString()}>
                  {q.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={index.toString()}
                        id={`q${q.id}-${index}`}
                        disabled
                        checked={index === answers[q.id]}
                      />
                      <Label
                        htmlFor={`q${q.id}-${index}`}
                        className={
                          index === q.correctAnswer
                            ? "text-green-500 font-medium"
                            : index === answers[q.id]
                              ? "text-red-500 line-through"
                              : ""
                        }
                      >
                        {option}
                        {index === q.correctAnswer && " ✓ Correct answer"}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>
          ))}

          <div className="flex justify-between">
            <Button onClick={() => setSubmitted(false)} variant="outline">
              Retake Quiz
            </Button>
            <Link href="/learn">
              <Button>Back to Learning Paths</Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {questions.map((q) => (
            <Card key={q.id}>
              <CardHeader>
                <CardTitle>{q.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup onValueChange={(value) => handleAnswerChange(q.id, Number.parseInt(value))}>
                  {q.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={index.toString()}
                        id={`q${q.id}-${index}`}
                        checked={answers[q.id] === index}
                      />
                      <Label htmlFor={`q${q.id}-${index}`}>{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>
          ))}

          <Button onClick={handleSubmit} disabled={Object.keys(answers).length < questions.length} className="w-full">
            Submit Answers
          </Button>

          {Object.keys(answers).length < questions.length && (
            <p className="text-center text-muted-foreground">Please answer all questions before submitting</p>
          )}
        </div>
      )}
    </div>
  )
}
