import { Circle } from "lucide-react";
import { Card } from "./ui/card";

const TaskEmptyState = ({ filter }) => {
  return (
    <Card className="p-8 text-center border-0 bg-gradient-card shadow-custom-md">
      <div className="space-y-3">
        <Circle className="mx-auto size-12 text-muted-foreground" />
      </div>
      <h3 className="font-medium text-foreground">
        {filter === "active"
          ? "Không có nhiệm vụ đang thực thi"
          : filter === "completed"
            ? "Không có nhiệm vụ nào hoàn thành."
            : "Không có nhiệm vụ nào."}
      </h3>

      <p className="text-sm text-muted-foreground">
        {filter === "all"
          ? "Thêm nhiệm vụ đầu tiên vào để bắt đầu!"
          : `Chuyển sang "tất cả" để xem nhiệm vụ ${filter === "active" ? "đang thực thi" : "hoàn thành"}.`}
      </p>
    </Card>
  );
};

export default TaskEmptyState;
