import { For } from "solid-js";
import Badge from "../components/badge";
import grading from "../data/grading.json";


export default function Home() {
  return (
    <main>
      <h1>Compare grading</h1>
      <p>Compare grades from different assessors side by side</p>

      <section class="card">
        <table>
          <thead>
            <tr>
              <th scope="col">Questions</th>
              <For each={grading.assessors}>
                {(assessor) => <th scope="col">{assessor}</th>}
              </For>
            </tr>
          </thead>
          <tbody>
            <For each={grading.questions}>
              {(question) => (
                <tr>
                  <th scope="row">{question.number}.</th>
                  <For each={question.answers}>
                    {(answer) => (
                      <td>
                        <Badge answer={answer} />
                      </td>
                    )}
                  </For>
                </tr>
              )}
            </For>
          </tbody>
        </table>
      </section>
    </main>
  );
}
