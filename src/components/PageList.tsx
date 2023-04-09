// pageList.tsx
import { Paper, Text } from "@mantine/core";

export function PageList({ pages }) {
  return (
    <div style={{ marginTop: 20 }}>
      {pages.map((page, index) => (
        <Paper key={index} padding="md" style={{ marginBottom: 10 }}>
          <Text>
            <a href={page.url} target="_blank" rel="noopener noreferrer">
              {page.title}
            </a>
          </Text>
          <Text size="xs" color="gray">
            {page.timestamp}
          </Text>
        </Paper>
      ))}
    </div>
  );
}
