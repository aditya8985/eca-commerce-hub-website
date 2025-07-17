import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TestSeriesSection = () => {
  const tableData = [
    {
      feature: "Writing Practice",
      noTest: "NA",
      ordinaryTests: "✅",
      prepcaTests: "✅"
    },
    {
      feature: "Make Your Own Exam Schedule",
      noTest: "NA",
      ordinaryTests: "✅",
      prepcaTests: "✅"
    },
    {
      feature: "Suggested Answers",
      noTest: "NA",
      ordinaryTests: "✅",
      prepcaTests: "✅"
    },
    {
      feature: "Multiple Revisions",
      noTest: "NA",
      ordinaryTests: "❌",
      prepcaTests: "✅"
    },
    {
      feature: "Detailed Answer-wise Personalized Feedback",
      noTest: "NA",
      ordinaryTests: "❌",
      prepcaTests: "✅"
    },
    {
      feature: "Test From Home",
      noTest: "NA",
      ordinaryTests: "❌",
      prepcaTests: "✅"
    },
    {
      feature: "Chapter-wise Performance Analysis",
      noTest: "NA",
      ordinaryTests: "❌",
      prepcaTests: "✅"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Test Series Comparison
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the right test series for your preparation. Compare features and benefits across different test options.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-blue-50">
                <TableHead className="font-bold text-gray-900">Feature</TableHead>
                <TableHead className="font-bold text-gray-900 text-center">No Test</TableHead>
                <TableHead className="font-bold text-gray-900 text-center">Ordinary Tests</TableHead>
                <TableHead className="font-bold text-gray-900 text-center bg-blue-100">ECA Tests</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((row, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="font-medium text-gray-900">
                    {row.feature}
                  </TableCell>
                  <TableCell className="text-center text-gray-600">
                    {row.noTest}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.ordinaryTests}
                  </TableCell>
                  <TableCell className="text-center bg-blue-50">
                    {row.prepcaTests}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="text-center mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            Choose ECA Tests
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestSeriesSection;