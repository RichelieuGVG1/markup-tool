from abc import abstractmethod
from typing import Dict, List

from app.model.project.project_model import Project


class ProjectRepository:

    @abstractmethod
    def Create(self, p: Project) -> Exception:
        pass

    @abstractmethod
    def Update(self, p: Project) -> Exception:
        pass

    @abstractmethod
    def FindAllByUserId(self, id: int) -> (List[Project], Exception):
        pass

    @abstractmethod
    def Find(self, id: int) -> (List[Project], Exception):
        pass

    @abstractmethod
    def isParticipant(self, project_id: int, user_id: int) -> (List[Project], Exception):
        pass

    @abstractmethod
    def Join(self, project_id: int, user_id: int) -> Exception:
        pass

    @abstractmethod
    def SetAnswer(self, project_id: int, task_id: int, user_id: int, answer_list: List[str],
                  execution_time: int) -> Exception:
        pass

    @abstractmethod
    def FindCompletedTasks(self, user_id: int, project_id: int) -> (List[int], Exception):
        pass

    @abstractmethod
    def FindUserCompletedTasks(self, user_id: int) -> (List[int], Exception):
        pass
